import Image from '$lib/components/OGCard.svelte';
import { parseQuery } from '$lib/utils/parse';
import { componentToPng } from '$lib/utils/renderImage';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
  const query = url.searchParams;
  const { title, desc, width, height } = parseQuery(query);
  console.log(title);
  return componentToPng(Image, { title, desc, width, height, satori: true }, height, width);
};
