import { error } from '@sveltejs/kit';
import { PUBLIC_GH_TOKEN } from '$env/static/public';

export async function load({ params, fetch }) {
  try {
    const post = await import(`../../../posts/${params.post}.md`);

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${PUBLIC_GH_TOKEN}`
    };

    const luPromise = await fetch(
      `https://api.github.com/repos/jesi-rgb/jesirgb.com/commits?path=src/posts/${params.post}.md`,
      { method: 'GET', headers: headers }
    );

    const lu = (await luPromise.json())[0].commit.author.date;
    if (lu === undefined) {
      post.metadata.lastUpdated = new Date();
    } else {
      post.metadata.lastUpdated = lu;
    }

    return {
      content: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    throw error(
      404,
      'Whoops, could not find ' +
      params.post +
      '. You probably have to upload the file to github first'
    );
  }
}
