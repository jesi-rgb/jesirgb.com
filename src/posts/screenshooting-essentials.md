---
title: Screen Shooting Essentials
description: Rough guidelines to up your screenshotting game
categories:
  - design
  - technical

date: 2024-04-27
---

Recently, I've been building a great deal of docs, and found myself making a
huge ton of screenshots. These are essential to not only showcase your product,
but to make it easier for everyone to find buttons, menus and alike.

Here are some rough guidelines I've come to realize when making screenshots,
to make them sharp, lightweight and interesting.

## Screenshooting tools

Starting with the tools to use, I recommend honing in to whatever tool that allows your
workflow to be as seamless and convenient as possible.

I use macOS. The default screenshot tool, while very convenient, ends up falling short quite quickly.

My tool of choice is undoubtedly [Shottr](https://shottr.cc/). It is basically free (winRAR model, just asks for money sometimes) but it's absolutely worth it at $8. It is extremely fast, has great design and great annotation tools.

For macOS, [Cleanshot](https://cleanshot.com/) is also quite up in the list. I also bought a copy of it, but for video purposes. Shottr fits my workflow much better than Cleanshot.

### The workflow

Shottr has the option to simply copy the image to the clipboard on Esc ⎋. So the process
is extremely fast: hit the shortcut and immediately escape out of it. This allows for
seamless sharing with the team.

Cleanshot can also do this, just not as fast. It takes several hundreds of miliseconds more. Not a lot, but quite annoying when you know better.

Both tools have the option to save the shot to a custom folder when hitting save, which is also very convenient. I have a "Screenshots" folder within the ~/Pictures directory.

## Composition over annotation

Regardless of the tool, composition is, and will always be, key. Position your elements
in an interesting way. Take inspiration from photography or graphic design. These considerations are not only for aesthetics, they also help communicate information more efficiently.

When composing correctly, the need for annotations almost vanishes, which leaves the space for your product to really shine.

This is not to say one should not annotate at all, but serves as a reminder to do it more purposefully.

## Context matters

When making shots of your UI, sometimes you are focusing on a dropdown, sometimes on a modal, etc. You may be tempted to focus only on what's being shown.

This is sometimes disorienting for an outsider that does not have the level of familiarity
with your tool.

Don't be afraid to show more of your UI. Extend the limits of your shot to include where
the feature lives, and how it relates to its surroundings. This gives meaning and context,
key aspects to understand why these elements exist.

These shots can also aid in considering if the element in question is actually needed, or could be improved. When trying to justify why something exists, you gain clarity of their purpose in the whole picture. Like an automated feedback process.

## Zoom in!

In the context of composition, zooming in comes in as one of the best techniques to focus
on something. But, apart from that, this allows your screenshot to look extremely sharp. The more pixels your letters occupy, the better it will read. Dead simple.

There are two ways of zooming in:

### UI Scaling

This corresponds to using ⌘ + `+` (or ctrl on Win) on a webpage. This scales all the elements and font sizes, which breaks the relationships between the original designs.

This can sometimes be useful to make text bigger for the shot.

### Pinch Zooming

A more conventional (_at least in my workflow_) approach is pinch zooming. This resembles more of a "getting closer" to the screen, which respects the original proportions between the UI elements.

In any of the cases, I highly encourage that you zoom in as much as you can to make your text and divs look crisp, while still maintaining context.

## Annotation

Annotating your screenshots has become considerably easier with tools like the ones mentioned above. Their annotation toolkit is full of everything you could even think of, from arrows, to circles, rectangles, counters, text, spotlights and so on.

These are super useful, but I invite you to be subtle and thoughtful about their use. Your screenshot can look like a click-baity-thumbnail very easily.

Annotate only what's not obvious, and try to blend in with your interface as much as possible.

## Hover states as native annotation

Following this principle, I love to use hover states as a way to highlight a particular element that I want to put emphasis on. This presents some advantages:

- It shows outsiders how your hover states look
- It puts emphasis on the element without the need for foreign annotations

## Compress your screenshots

Lastly, when you've achieved maximum shotting greatness, it's time to upload your pixels to a server. The less information you upload, the less time it'll take to load.

I highly recommend you compress your screenshots in a sensible way, that works for your purpose.

My purpose was to upload these images to a service to be fetched upon loading. For that reason, I compress them to `.webp` files. This format is usually ~80-90% smaller than their PNG counterpart, which is massive gains in bandwidth, while being imperceptibly worse.

As to _how_ to compress your shots, it's up to you. You can use any of the infinite online tools there exist, or go local with the terminal if you feel like so.

### Compressing using ffmpeg

As a bonus, I'll leave here a shell snippet I created to help me on this task. You need to have [ffmpeg](https://ffmpeg.org/) installed.

```shell
# This is UNIX shell, will probably not
# work on windows unless you use the WSL
png2webp() {
  filename=$(basename "$1" | cut -d. -f1)

  ffmpeg -i $1 "$filename.webp" -hide_banner -loglevel error

  input_file="$filename.png"
  output_file="$filename.webp"

  input_size=$(stat -f "%z" "$input_file")
  output_size=$(stat -f "%z" "$output_file")

  compression_ratio=$(awk "BEGIN { printf \"%.2f\", $output_size / $input_size * 100 }")
  echo -e "Compressed \\033[1;33m$1\\033[0m to \\033[1;33m$compression_ratio%\\033[0m of the original size"
}
```

You can then use it like this:

```shell
png2webp input_screenshot.png
```

and it will create a new .webp file in the same directory, with the same name. It will also tell you how much smaller the new image is, just as a reminder of how many bytes you are saving to your users. :P
