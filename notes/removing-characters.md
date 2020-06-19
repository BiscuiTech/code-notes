---
title: Removing Characters from string
tags:
  - javascript
---

```javascript
str = "Animation - Début";
str.replace(/[^A-Z0-9]+/gi, "_");
// Animation___Début
str.replace(/[^A-Z0-9]/gi, "_");
// Animation_Début
```
