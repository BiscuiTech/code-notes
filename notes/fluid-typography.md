---
title: Fluid typography
tags:
  - css
---

```css
body {
  font-size: calc(
    [minimum size] + ([maximum size] - [minimum size]) * ((
            100vw - [minimum viewport width]
          ) / ([maximum viewport width] - [minimum viewport width]))
  );
}

/* example: */
body {
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
```

```css
html {
  font-size: 16px;
}
@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
}

@media screen and (min-width: 1000px) {
  html {
    font-size: 22px;
  }
}
```

Calculate your own: https://websemantics.uk/tools/responsive-font-calculator/

Or use this if you only need to support Safari (11.1+) and Chrome (79+)

```css
html {
  font-size: min(max(16px, 4vw), 22px);
}
```

Or even this if you only support Chrome (79+)

```css
body {
  font-size: clamp(16px, 4vw, 22px);
}
```

Source: https://css-tricks.com/simplified-fluid-typography/
