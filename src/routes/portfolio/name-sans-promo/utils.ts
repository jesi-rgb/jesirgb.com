import { codeToHtml } from 'shiki';

async function hightlightCode(code: string, lang = 'python') {
    const htmlFromCode = await codeToHtml(code, {
        lang: lang,
        theme: 'slack-dark'
    });

    return htmlFromCode;
}

let coldtypeCode = `
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

let map_color = `
def map_color(i):
    if i == math.isqrt(i) ** 2:
        return ACCENT_COLOR
    elif i % 2 == 0:
        return PRIMARY_COLOR
    else:
        return SECONDARY_COLOR
`.trim();

let stst = `
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

export let coldtypeHtmlCode = await hightlightCode(coldtypeCode);
export let mapColorHtml = await hightlightCode(map_color);
export let ststHtml = await hightlightCode(stst);
