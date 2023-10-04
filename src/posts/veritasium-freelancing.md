---
title: Veritasium, math and freelancing
description: Working with Veritasium and kickstarting my carreer as a freelancer
date: 2021-07-30
categories:
  - showcase
  - animation
---

## Table of Contents

## The conjecture

This last week, I had the huge opportunity to work with the Veritasium team in the biggest project that **I** have ever worked, and possibly also the coolest. The video in question talks about the Collatz Conjecture, a little problem that, to this day, has no solution, despite being very simple to understand.

The idea behind the problem goes like this:

1. Take any positive integer as a starting point: **6**.
1. Now, we iterate this pair of rules based on the parity of the last number:
   - If the number is **even**: divide it by 2.
   - If it is **odd**, multiply 3 and add 1.

Applying these rules to our starting number over and over again we obtain a sequence:

`6, 3, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1, 4, 2, 1..`

Because 6 is even, we divide, obtain 3, which is odd, so we multiply and add, 10, even, divide... you get it.

As you can see, very quickly we get into a loop, the `4, 2, 1` loop. 1 is odd, so we multiply and add, obtaining 4, which is even so we divide, 2, divide, 1, multiply and add, 4... looping over and over forever.

The conjecture itself tries to find out if this is true for every number. That is, does every positive integer extending to infinity land on the `4, 2, 1` loop? Finding out just 1 counter example would prove this conjecture wrong, but we haven't found any cases yet.

This is a **conjecture** because we have not proven this formally with mathematical tools that allow us to abstract the numbers themselves and just being able to say, confidently, that "_for absolutely every positive number, this holds true_".

As stated in the video, some mathematicians suggest that "_math is not yet prepared for such problem_".

## The video

Here are some frames I made for the video, using [Manim](https://github.com/3b1b/manim)

![Frame of the animation](/blog/veritasium/WhyFall_1.png)

![Frame of the animation](/blog/veritasium/loop.png)

Finally, here's the final video. We put a lot of effort and passion into it, so hopefully you'll love it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/094y1Z2wpJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The goals

Working in this project has made me realize that I really want to pursue a career like this, where I teach things on the internet to millions of people. It really makes me feel great and I am not afraid of possibly failing. I'll extend my role also working as a designer and data scientist, visualizing data and presenting it beautifully. [The Pudding](https://pudding.cool) are a great example of this, and really inspire me to continue down this line. We'll see where we are in year from now! I am excited.
