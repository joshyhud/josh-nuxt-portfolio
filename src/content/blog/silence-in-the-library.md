---
title: "Silence in the Library!"
description: "Are external libraries hurting the frontend?"
pubDate: 2026-04-03T11:10:00Z
tags:
  - Post
---

## Silence in the Library!

A few weeks ago I went to the Web Day Out conference in Brighton, presented by the lovely people at Clearleft. It was an amazing day of frontend chat that filled my heart with joy.

A key theme I noticed was that modern CSS can handle much of what we used to rely on bloated libraries for animations, popovers, modals, and more. With basic HTML, small control attributes, and native CSS, developers now have powerful tools without compromising performance.

### The NPM Library Issue

Frameworks like React often rely heavily on third-party libraries and bundles. Just like WordPress sites can fall into “plugin soup,” React projects can end up suffering from “bundle bloat” extra code that slows sites down, increases maintenance, and introduces potential security risks.

Libraries are convenient and can speed up development, but it’s crucial to understand what we’re adding. Recent NPM package hacks with AXIOS and leaked claude code illustrate how easy it is to unknowingly open floodgates in a project. Redundant or poorly vetted packages add bloat, affect performance, and can create vulnerabilities.

I’m not saying libraries are inherently bad. The point is to assess their use upfront. Building your own components and styles gives you control over your code, ensuring client websites are both secure and performant.

### Returning Borrowed Code

The frontend ecosystem has never been more powerful. With modern CSS and small, well-chosen libraries, we can create beautiful, interactive experiences without sacrificing performance or security.

Before reaching for the next NPM package, ask yourself: Do I really need this?

Being deliberate about dependencies isn’t about avoiding convenience, it’s about taking control, building maintainable projects, and keeping our sites secure. A little extra thought upfront goes a long way toward cleaner code, faster sites, and happier developers.
