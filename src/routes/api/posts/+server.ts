import type { Post } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getPosts() {
  let posts: Post[] = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post = { ...metadata, slug } satisfies Post;
      if (post.published) {
        posts.push(post as Post);
      }
    }

    posts.sort((p2: Post, p1: Post) => {
      return new Date(p1.date).getTime() - new Date(p2.date).getTime();
    });
  }
  console.log(posts);
  return posts;
}
export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
