---
title: Web Type Essentials
description: Interwebs typography at its finest
categories:
  - tutorial
  - typography
  - web

date: 2023-11-23
---

<script>
import Calt from '$lib/components/posts/Calt.svelte'
import Liga from '$lib/components/posts/Liga.svelte'
import Tnum from '$lib/components/posts/Tnum.svelte'
import Frac from '$lib/components/posts/Frac.svelte'
import SSAlt from '$lib/components/posts/SSAlt.svelte'
</script>

the current state of web technologies offers an excellent toolkit to develop and play with font technology to a great extent. let's review some of the different features we can use to make our type more versatile, legible and fun.

## table of contents

let's discuss some of the very nice features available through CSS to make a type system really work for us.

we'll talk about some of the hottest OpenType features that we've got available and illustrate how to use them through code. let's go

## contextual alternates

### `calt`

contextual alternates allow some characters to play a bit more nicely around other characters

<Calt />

you can check how the parentheses are better aligned with the capital letters, or the x character being swapped for a proper multiplication symbol.

**note**: safari has some trouble rendering these features. some might change, some might not. webdev... ikyk.

## ligatures

### `dlig, liga`

ligatures enable you to substitute sets of characters for a new, usually unified character that either looks cool, reads better or, ideally, both

<Liga/>

pay attention to the playful `f`s, and their interaction with the `i`s

`dlig` and `liga` do not enable the same features on the type system, but browsers do not seem to support every feature yet.

discretionary ligatures are, in general, are fancier versions of some characters. standard ligatures are, in general, more understated and intended for a better reading experience and easier text parsing. this, however, is totally up to the type designer and can mean completely different things on different type systems.

## tabular numbers

tabular numbers are essential in, well... tables. this feature simply enables a monospaced set of numbers. _mono (one, single) space (space)_ indicates that every character occupies the same exact space, which means that numbers align perfectly.

it is _extremely encouraged_ to turn this feature on for stacked up numbers, like those found in **tables**.

<Tnum/>

## fractions

fractions are a severely underrated feature in OpenType. these allow us to quickly and easily build good looking fractions without pretty much any hassle, in a single CSS line.

<Frac/>

Note: this feature can also be switched on/off through the `font-variant-numeric: diagonal-fractions` rule, and some of the previously mentioned features have their own named rules. i am nevertheless going to keep it simple by using `font-feature-settings` since it's got the same notation across the board AND it really shows what OpenType features we are using. this allows for further research on those that interest us the most.

## stylistic sets

because there we can only define so many styles in general terms, stylistic sets offer a very expressive way for typographers to define specific alternates for extreme control and fun.

these features depend greatly on the font at hand. in this example, Satoshi can swap the a, g and t characters through the `ss01`, `ss02` and `ss03` settings, respectively.

but any other font will have their own features, dictated solely by the type designer. check your font's feature sheet and inspect what's possible! you'll be surprised of how many things you could be missing out on.

<SSAlt/>

## final thoughts

these are some of the modern features that designers and developers have at hand when using type. there are a ton more available, and surely there are features being created and developed as you read this. make sure to dive deep into your typeface of choice to get as much as you can out of it.

### happy typesetting!
