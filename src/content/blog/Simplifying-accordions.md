---
title: "Simplifying Accordions"
description: "Learn how to use the HTML `<details>` and `<summary>` elements to create accessible, interactive UI components without JavaScript. This tutorial covers practical examples, styling techniques, and how to build accordions using pure HTML for modern, lightweight web development."
pubDate: 2026-04-06T09:30:00Z
tags:
  - Tutorial
---

# Creating Interactive Accordions with `<details>` and `<summary>` tags.

The `<details>` and `<summary>` elements are a powerful, native way to create interactive accordion components on the web and don't need a single line of JavaScript to work.

These elements are perfect for building FAQ sections, accordions for content, and any UI element that requires being toggled open and closed.

## Look ma no JavaScript!

<iframe 
  height="300" 
  style="width: 100%;" 
  scrolling="no" 
  title="Details Summary Demo"
  src="https://codepen.io/Joshyhud/embed/yyaqgJV?default-tab=html,result"
  frameborder="no" 
  loading="lazy" 
  allowfullscreen>
</iframe>

---

## What are `<details>` and `<summary>`?

- `<details>`: this is a container that can be toggled open or closed.
- `<summary>`: the visible label or heading users will see and click to expand/collapse the content.

### Basic Example

```html
<details>
  <summary>What is this?</summary>
  <p>This is a native HTML disclosure widget.</p>
</details>
```

### What does this do?

- The `<summary>` is always visible.
- Clicking it toggles the rest of the `<details>` content.
- The browser handles state, accessibility, and interaction.

---

## Open by Default

You can make a `<details>` element open by default using the `open` attribute:

```html
<details open>
  <summary>What is this?</summary>
  <p>This is a native HTML disclosure component.</p>
</details>
```

---

## Styling the Elements

Browsers add a default arrow (marker), but you can customize the appearance.

### Remove Default Marker

```css
summary {
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}
```

### Add Custom Indicator

```css
summary::after {
  content: "➕";
  float: right;
}

details[open] summary::after {
  content: "➖";
}
```

---

## Creating an Accordion (No JS)

By default, multiple `<details>` can be open at once. To create an accordion (only one open), you can use the `name` attribute (supported in modern browsers):

```html
<details name="accordion">
  <summary>Section 1</summary>
  <p>Content 1</p>
</details>

<details name="accordion">
  <summary>Section 2</summary>
  <p>Content 2</p>
</details>
```

Only one will stay open at a time.

---

## The Important bit: Accessibility Benefits

One of the biggest advantages of using `<details>` is built-in accessibility:

- Keyboard accessible by default
- Screen readers understand the expanded/collapsed state
- No need for ARIA attributes in most cases

---

## When Should You Use It?

Great use cases include:

- FAQs
- Collapsible sections
- Progressive disclosure
- Settings panels

Avoid using it when:

- You need complex animations tied to state
- You require full control over open/close logic

---

## Progressive Enhancement Tip

Even if a browser doesn’t support `<details>`, the content is still visible—making it a safe, resilient choice.

`<details>` and `<summary>` are widely available on Baseline and support most modern browsers on [caniuse](https://caniuse.com/details).

---

## Final Thoughts

`<details>` and `<summary>` are a great example of how modern HTML can replace JavaScript for common UI patterns. They’re lightweight, accessible, and easy to implement.

If you’re building simple toggles or accordions, start here before reaching for a JS library.
