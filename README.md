# jesirgb.com (2026)

Personal site. Astro 6, Tailwind v4, content collections.

```sh
bun install
bun run dev
bun run build
```

## Pages

- `/` landing. Pulls from `src/data/work.ts`, the blog and the gallery.
- `/work` projects and experience. Edit `src/data/work.ts`.
- `/blog` markdown posts in `src/content/blog/`.
- `/gallery` the exhibition list. `/gallery/[exhibition]` is one room: a wall
  you pan and zoom, with the wall text at the centre and a label under each
  photo. `/gallery/[exhibition]/[photo]` is the zoomable view of one photo.

## Add photos

1. Copy the files into `src/gallery/`.
2. Run `bun run gallery:sync`. New files get an entry in
   `src/content/gallery/photos.json` with camera, lens, settings, date and a
   color/B&W flag read from EXIF. Needs `exiftool` on the PATH.
3. Edit the entry by hand for `alt`, `caption`, `tags`, `location`, `featured`.
   For analog shots add `"film": { "stock": "Portra 400", "iso": 400, "format": "35mm" }`.
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
  - DSCF4514
---

The body is the wall text. It shows above the photos.
```

To take a show down, set `status: past` and give it a `closes` date. To put a
new one up, add the file. The index groups the shows by status.

Keep source photos around 3000px on the long edge. Astro copies the originals
into `dist/`, so 17 MB files make the deploy heavy.

## Fonts

- `AT Name Sans Variable` is served from `public/fonts/`.
- Mono is Azeret Mono and titles are Fahkwang, both through the Astro fonts API.

## Theme

Tokens live in the `@theme` block of `src/styles/global.css`. Light and dark
values are CSS variables on `:root` and `:root.dark`. The theme toggle in the
header writes `localStorage.theme`.
