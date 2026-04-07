---
title: "This tutorial is lazy"
description: "It's Tuesday morning, lets get lazy! No need for external libraries for lazy loading natively for modern browsers"
pubDate: 2026-04-07T08:00:00Z
tags:
  - Tutorial
---

# This is lazy

<img src="./img/lazy-cat.gif" loading="lazy" alt="A lazy cat sitting on the sofa sighing" width="300" height="200">

The cat above is being very lazy, but also uses the HTML attribute of `loading="lazy"`. This short little snippet added to `<img>` tags will save you having to use a third party library to enusre that images are not loaded until they are required.

I am aware that the GIF above is within the viewport on load, so technically it doesn't need `loading="lazy"`, but we are making a point here so stay with me.

---

## What is lazy loading?

Lazy loading is a performance technique where resources, mostly images but this can work with iframes, are only loaded when they're about to enter the veiwport.

Instead of downloading everything upfront on load, the browser waits until the user scrolls near the conent. This means less upfront work and faster initial page loads.

---

## Why `loading="lazy"`?

Images are often the heaviest assets on a page. On slower connections (or limited data plans), loading everything immediately can be wasteful and slow.

By adding:

```html
<img src="image.jpg" loading="lazy" alt="..." />
```

You get

- Faster initial page loads
- Reduced bandwidth usage
- Better performance on mobile devices
- Improved COre Web Vitals (better LCP and CLS when used correctly)

The best part of this is that its native, no JavaScript libraries and extra dependencies in your projects.

---

## Browser support

Most modern browsers will support lzy loaidng natively out of the box.
See <a href="https://caniuse.com/loading-lazy-attr" target="_blank">can i use</a>

In older and unsupported browsers the arrtibutes will simply be ignored and images will load normally. No breaking chnages to the site if use, just a simple degredation.

---

## Notes on JavaScript

Even though this is a browser level feature, lazy loading behaviour is tied to the browser’s loading logic, which can be influenced by JavaScript being enabled.

In practice:

If JS is disabled, images will still load
Lazy loading just won’t defer in the same way

So you’re not blocking content, just enhancing performance when possible.

---

## When not to use lazy loading

Don’t go crazy with lazy loading as adding to everything can actually hurt performance in some cases.

Avoid using loading="lazy" on:

- Hero images (or conteny above the fold)
- Key content that should appear immediately
- Navigation or layout-critical visuals

If it’s visible on first paint, load it normally.

---

## Responsive + lazy images

Lazy loading works great alongside responsive images for maximum efficiency:

```html
<img
  src="image-small.jpg"
  srcset="image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  loading="lazy"
  alt="A descriptive alt text"
/>
```

This combo ensures:

- The right image size is loaded
- Only when it’s needed

---

## Lazy loading iframes

```html
<iframe
  src="https://www.youtube.com/embed/xyz"
  loading="lazy"
  title="YouTube video"
></iframe>
```

---

## Final thoughts

Be more lazy

Make `loading="lazy"` part of your default orkflows when working with images. It's a simple win. Just remmeber dont lazy load what the user needs to see immediately.
