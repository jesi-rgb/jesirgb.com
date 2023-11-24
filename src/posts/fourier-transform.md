---
title: Fourier Transform
description: Small notes to make sure I get this topic in my head.
categories:
  - thinking
  - math
date: 2022-09-01
---

## Table of Contents

## Intro

Mathematical transformation that decomposes functions depending on **space** or **time** into functions depending on **spatial frequency** or **temporal frequency**.

$$\hat{f}(ξ) = \int_{- \infty}^{\infty} f(x) e^{-i2 \pi ξ x} dx, \forall ξ \in \mathcal{R}$$

_The transform of function $f(x)$ at frequency ξ is given by the complex number $\hat{f}(ξ)$. Evaluating this equation for all values of ξ produces the frequency-domain function. The Fourier transform is denoted here by adding a circumflex to the symbol of the function._

When the independent variable represents time (often denoted by $t$ instead of $x$), the transform variable represents frequency (often denoted by $f$ instead of ξ). E.g. if time is measured in seconds, then frequency is in hertz (1/s).

## From [3b1b's video](https://www.youtube.com/watch?v=spUNpyF58BY):

Essentially, we are winding up our function and plotting the values of the function in a 2D-complex plane. We wind up our function around the origin at some frequency. These frequencies correspond to ξ. Whenever the frequency ξ matches somehow with the frequencies that our signal may be composed of, this will return high values in this integral.

What we are measuring, step by step is:

### $e$'s rotation

$$e^{\theta i}$$

This piece of the equation allows us to rotate around the origin on the complex plane. $\theta$ is the angle measured in radians. When applied, this will just output a complex number pointing at that angle in the unit circle.

Adding 2π to this, means giving it a full spin:
$$e^{2\pi i}$$

and adding the frequencies that we want to analyze over time:
$$e^{2\pi i f t} = e^{2\pi i ξ x}$$
where $f$ and ξ are used interchangeably, as well as $x$ and $t$.

This rotates our function clockwise, and the convention states the opposite, so we throw a minus sign in there:
$$e^{-2\pi i f t}$$

### Scaling of the value

Now, this allows us to rotate at our specific frequency that we want to analyze, but the magnitude is still invariant. Every complex number lies on the unit circle. To **scale** the vector, we just multiply all that by our function at that point in time!
$$f(t) \cdot e^{2\pi i f t}$$

And this will give us a single complex number for a given $t$.

### Final integration/sumation

We are now going to evaluate this function for every $f$ (or ξ) in the real number plane $\mathbb{R}$.

_Computationally_, this would mean to sample our function at regular intervals, evaluating those samples and taking the average.
$$\hat{f}(ξ) = \frac{1}{N} \sum^{N}_{k=1} f(t_k) e^{2\pi i f t_k}$$

where $t_k$ just means the moment in time we are sampling at, and $f(t_k)$ is the value of our function at that time.

_Mathematically_, this means taking the integral of as much as we can, that means from $-\infty$ to $\infty$! Sample infinitely many points! In this case we don't divide by the number of points sampled since it... well... is infinite!

$$\hat{f}(ξ) = \int_{- \infty}^{\infty} f(x) e^{-i2 \pi ξ x} dx, \forall ξ \in \mathcal{R}$$

With all this setup, $\hat{f}(x)$ outputs a **complex number**, that corresponds to the **strength of a given frequency** in the original signal, and we evaluate that for all possible frequencies. (or, at least, those that we are interested in :P)

The domain now is frequency, not time.

That brings us to the balance between knowing **when** a particular frequency appears in our signals rather than knowing **what** frequencies our signal is composed of, ruled by Heisenberg's uncertainty principle.
