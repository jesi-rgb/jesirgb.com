import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.post}.md`);
    return {
      content: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    throw error(404, 'Woopsies, could not find ' + params.post);
  }
}
