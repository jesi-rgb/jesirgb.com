// Credit Matt DesLauriers: https://gist.github.com/mattdesl/47412d930dcd8cd765c871a65532ffac

// Taken From:
// https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment

type Point = Array<number>;

function sqr(x: number) {
  return x * x;
}

function dist2(v: Point, w: Point) {
  return sqr(v[0] - w[0]) + sqr(v[1] - w[1]);
}

// p - point
// v - start point of segment
// w - end point of segment
function distToSegmentSquared(p: Point, v: Point, w: Point) {
  const l2 = dist2(v, w);
  if (l2 === 0) return dist2(p, v);

  let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, [v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1])]);
}

// p - point
// v - start point of segment
// w - end point of segment
function distToSegment(p: Point, v: Point, w: Point) {
  return Math.sqrt(distToSegmentSquared(p, v, w));
}

export { distToSegment, distToSegmentSquared };
