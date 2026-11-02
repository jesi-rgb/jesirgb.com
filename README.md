# jesirgb.com (2026)

Personal site. Astro 6, Tailwind v4, content collections.

```sh
bun install
bun run dev
bun run build
```

## Pages

- `/` landing. Pulls from `src/data/work.ts`, the blog and the gallery.
- `/work` projects, experience and a deck of posters. Edit `src/data/work.ts`;
  posters are files in `src/posters/`, stacked in the order listed in
  `src/data/posters.ts` (top card first). The pile's tilt is random per build.
- `/blog` markdown posts in `src/content/blog/` (`.mdx` when a post embeds a
  component from `src/components/blog/`). Images go in `src/assets/blog/<post>/`,
  linked relatively; videos in `public/blog/<post>/`. `$…$` and `$$` blocks
  render with KaTeX, and a "Table of contents" heading fills itself in
  (`src/markdown/plugins.mjs`).
- `/gallery` the exhibition list. `/gallery/[exhibition]` is one room: a wall
  you pan and zoom, with the wall text at the centre and a label under each
  photo. `/gallery/[exhibition]/[photo]` is the zoomable view of one photo.

## Add photos

1. Copy the files into `src/gallery/`. To shrink them, keep every tag: for
   scans copy the XMP as a block (`exiftool -TagsFromFile orig.jpg -xmp out.jpg`),
   because exiftool can't copy Rolloc's `FilmStock` tag on its own.
2. Run `bun run gallery:sync`. New files get an entry in
   `src/content/gallery/photos.json` with what the file holds: camera, lens,
   settings, 35mm-equivalent focal length, exposure compensation, mode,
   metering, capture date and a color/B&W flag. Fujifilm files also get the
   film simulation and its recipe (dynamic range, tone, grain, color chrome,
   clarity, noise reduction, sharpness, white balance, mono toning). Rolloc
   scans get `film` with maker, stock, ISO and the scan software. Fields the
   file doesn't have are left out, and so is the date. Needs `exiftool` on the PATH.
3. Edit the entry by hand for `alt`, `caption`, `tags`, `location`.
   For film, add `"format"` (`"35mm"`, `"120, 6×4.5"`). For analog shots without
   Rolloc data, add `"film": { "manufacturer": "Kodak", "stock": "Portra 400", "iso": 400, "format": "35mm" }`.
4. Add the photo id to an exhibition. `gallery:sync` gives a list of the photos
   that are in no exhibition.

## Exhibitions

A photo shows only inside an exhibition. One markdown file per exhibition in
`src/content/exhibitions/`:

```yaml
---
title: A Day in Meissen
subtitle: One line for the gallery index.
status: on-view      # on-view | permanent | past
opens: 2026-05-16    # not used by permanent shows
closes: 2026-12-31   # optional
cover: DSCF4519      # photo id for the index
order: 1             # lower goes first inside the status group
photos:              # hang order, not date order
  - DSCF4519
  - DSCF4514:
    title: Morning light   # wall label in this room; falls back to the caption
---

The body is the wall text. It shows above the photos.
```

To take a show down, set `status: past` and give it a `closes` date. To put a
new one up, add the file. The index groups the shows by status.

Source photos are committed with the site. Astro only ships the resized AVIF
and WebP copies; the originals never reach `dist/`. Keep sources around 3000px
on the long edge so the repo stays light.

## Deploy

Netlify builds from git with `netlify.toml`: `astro build`, publish `dist/`,
Node 22. Push to deploy.

## Fonts

- `AT Name Sans Variable` is served from `public/fonts/`.
- Mono is Azeret Mono and titles are Fahkwang, both through the Astro fonts API.

## Theme

Tokens live in the `@theme` block of `src/styles/global.css`. Light and dark
values are CSS variables on `:root` and `:root.dark`. The theme toggle in the
header writes `localStorage.theme`.

The palette follows the visitor's local hour. An inline script in
`src/layouts/Layout.astro` sets `data-palette` on `<html>` from its `schedule`,
and `global.css` holds a `:root[data-palette=…]` light and dark block for each
palette but Mint, which is the default on `:root`:

| From  | Palette |
| ----- | ------- |
| 05:00 | Moss    |
| 09:00 | Mint    |
| 18:00 | Slate   |
| 23:00 | Plum    |

The light/dark toggle still works on top of whichever palette is active. In
dev the palette picker overrides the schedule.
