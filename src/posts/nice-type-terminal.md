---
title: Better technical typography
description: Kitty + Recursive goated combo
categories:
  - tutorial
  - typography

date: 2023-11-10
---

<script>
import RecursiveDesignSpace from '$lib/components/posts/RecursiveDesignSpace.svelte'
</script>

I put a lot of emphasis on how my workspace looks. <em>I believe in beauty as a form of function.</em> That's why i usually spend a lot of time customizing the tools i use.

## The terminal: Kitty

My current setup is composed of Kitty, a very simple terminal emulator, paired with Recursive.

[![Kitty terminal Screenshot](/assets/better-technical-typography/jesirgb-screenshot.png)](/assets/better-technical-typography/jesirgb-screenshot.png)

I know there are lots of options out there, like the macOS native terminal emulator or the very ubiquitous iTerm, as well as Warp.

While all those tools are great, only Kitty is able to address all the main features I need:

1. Fast response for use with Neovim
1. Support for font ligatures
1. Great font tools and extensible documentation on those

iTerm is very slow to use with Neovim. It just does not keep up with the tool and drains a lot of battery when doing so. Warp is very fast and snappy, but to this date, [it still does not support font ligatures](https://github.com/warpdotdev/warp/issues/239).

Kitty has an incredible font rendering engine. Though the [configuration](https://sw.kovidgoyal.net/kitty/conf/) is not as easy as in other terminals, as a Vim user you'll feel at home, plus it's quite well documented. This terminal allows you to change fonts per style. That is, you can choose a completely different font for bold and for normal, or for italics. It's not really obvious why one would do that, but with fonts like <span class="font-mono">Recursive</span>, this is incredibly helpful.

_On top of that, Kitty uses basically no battery, as it's heavily optimized for laptop use. Quite crazy this is a completely free, open source project._

## The font: `Recursive`

[Recursive](https://www.recursive.design/) comes in two main flavours: Casual and Linear, and you can download both separately from the Google Fonts page.

<RecursiveDesignSpace/>

By downloading both, we can do something like this in our `kitty.conf`:

```bash
font_family        Recursive Monospace Medium
bold_font          Recursive Monospace Casual ExtraBold
italic_font        Recursive Monospace Casual Medium
bold_italic_font   Recursive Monospace Casual ExtraBold
```

We are telling kitty to use the linear "normal" one in normal text, but when text is bold, use the casual one. Same goes with the italics. This adds an incredibly tasty flavour to the code if your terminal allows for it.

[![Kitty Screenshot](/assets/better-technical-typography/mdx-screenshot.png)](/assets/better-technical-typography/mdx-screenshot.png)

Particularly within Neovim, I am using the [Catppuccin](https://github.com/catppuccin/catppuccin) theme which also enables italics in particular places, like function arguments. Notice how the selected text also becomes bold and `fancy`.

[![Kitty terminal Screenshot](/assets/better-technical-typography/timeline-screenshot.png)](/assets/better-technical-typography/timeline-screenshot.png)

We can also enable ligatures directly accessing OpenType features independently on each font we declared before:

```
font_features RecursiveMonospace-Medium +zero +dlig
```

This makes it so that the `0` character is slashed (`+zero`) and the (D)iscretionary (Lig)atures `+dlig` are enabled in the medium weight of the linear font.
