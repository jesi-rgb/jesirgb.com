import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';

export async function componentToPng(component, props, height: number, width: number) {
  const boldFetch = await fetch(
    'https://jesi-rgb-fonts.s3.eu-west-3.amazonaws.com/ATNameSansStandard-SemiBold.otf'
  );

  const normalFetch = await fetch(
    'https://jesi-rgb-fonts.s3.eu-west-3.amazonaws.com/ATNameSansStandard-SemiBold.otf'
  );
  const boldFont = await boldFetch.arrayBuffer();
  const normalFont = await normalFetch.arrayBuffer();

  const result = component.render(props);
  const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
  const svg = await satori(markup, {
    fonts: [
      {
        name: 'Name Sans Bold',
        data: boldFont,
        style: 'normal'
      },
      {
        name: 'Name Sans Text',
        data: normalFont,
        style: 'normal'
      }
    ],
    height: +height,
    width: +width
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: +width
    }
  });

  const png = resvg.render();

  return new Response(png.asPng(), {
    headers: {
      'content-type': 'image/png'
    }
  });
}
