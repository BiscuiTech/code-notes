---
title: Mobile viewport units
tags:
  - css
---

```css
.my-element {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
```

```javascript
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight _ 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', \_.debounce( () => {
// We execute the same script as before
let vh = window.innerHeight _ 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
}, 400)
);

```
