const HEIGHT = 630;
const WIDTH = 1200;
const factor = 1.5;

export function parseQuery(query) {
  const title = query.get('title') ?? undefined;
  const desc = query.get('desc') ?? undefined;
  const width = query.get('w') ?? WIDTH;
  const height = query.get('h') ?? HEIGHT;
  return { title: title, desc: desc, width: +width * factor, height: +height * factor };
}
