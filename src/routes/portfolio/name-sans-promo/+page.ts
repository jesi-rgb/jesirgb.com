import { codeToHtml } from 'shiki';

const coldtypeCode = `
def numbers(f):
    def map_color(i):
        if i == math.isqrt(i) ** 2:
            return ACCENT_COLOR
        elif i % 2 == 0:
            return PRIMARY_COLOR
        else:
            return SECONDARY_COLOR
    n = 9**2
    numbers = (
        PS(
            [
                StSt(
                    f"{i+1:02d}",
                    name,
                    94,
                    opsz=0.9,
                    wght=0.5 + 0.5 * np.cos(i % n * f.i / length_numbers),  # happy with this one
                    fill=map_color(i + 1),
                    features={"tnum": True, "zero": True, "rvrn": False},
                )
                for i in range(n)
            ]
        )
        .grid(every=np.sqrt(n))
        .lead(30)
        .translate(x=30, y=30)
    )

    return ( numbers )
`.trim();

const map_color = `
def map_color(i):
    if i == math.isqrt(i) ** 2:
        return ACCENT_COLOR
    elif i % 2 == 0:
        return PRIMARY_COLOR
    else:
        return SECONDARY_COLOR
`.trim();

const stst = `
StSt(
    f"{i+1:02d}",
    name,
    94,
    opsz=0.9,
    wght=0.5 + 0.5 * np.cos(i % n * f.i / length_numbers),  # happy with this one
    fill=map_color(i + 1),
    features={"tnum": True, "zero": True, "rvrn": False}
)
`.trim();

const wghtLine = 'wght=0.5 + 0.5 * np.cos(i % n * f.i / length_numbers)'.trim();

const fillLine = 'fill=map_color(i + 1)'.trim();
const featureLine = 'features={"tnum": True, "zero": True, "rvrn": False}'.trim();

const restCode = `
    PS(
        # ...what we just saw
    )
    .grid(every=np.sqrt(n))
    .lead(30)
    .translate(x=30, y=30)

`;

async function hightlightCode(code: string, lang = 'python') {
    const htmlFromCode = await codeToHtml(code, {
        lang: lang,
        themes: { light: 'snazzy-light', dark: 'vesper' }
    });

    return htmlFromCode;
}
export async function load() {
    const coldtypeHtmlCode = await hightlightCode(coldtypeCode);
    const mapColorHtml = await hightlightCode(map_color);
    const ststHtml = await hightlightCode(stst);
    const wghtLineHtml = await hightlightCode(wghtLine);
    const fillLineHtml = await hightlightCode(fillLine);
    const featureLineHtml = await hightlightCode(featureLine);
    const restCodeHtml = await hightlightCode(restCode);

    return {
        coldtypeHtmlCode,
        mapColorHtml,
        ststHtml,
        wghtLineHtml,
        fillLineHtml,
        featureLineHtml,
        restCodeHtml
    };
}
