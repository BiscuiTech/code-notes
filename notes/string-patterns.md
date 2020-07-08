---
title: String patterns
tags:
  - javascript
emoji: 🎣
---

# Removing Characters

```javascript
str = "Animation - Début";
str.replace(/[^A-Z0-9]+/gi, "_");
// Animation___Début
str.replace(/[^A-Z0-9]/gi, "_");
// Animation_Début
```


# Pad numbers with characters
```javascript
function pad(n, width, z) {
	z = z || '0';
	n += '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
```