---
title: Array Patterns
tags:
  - javascript
emoji: 🎣
---

# Array Patterns

## Filter Out Null or Undefined from Array

```javascript
var filtered = array.filter(function (el) {
  return el != null;
});
```

## Set Operations over JavaScript Arrays

### Intersection

```javascript
const intersection = arr1.filter((x) => arr2.includes(x));
```

### Difference

```javascript
const difference = arr1.filter((x) => !arr2.includes(x));
```

### Union

```javascript
const union = arr1.concat(arr2);
```

### Symmetric Difference

```javascript
const difference = arr1
  .filter(x => !arr2.includes(x))
  .concat(arr2 =>
    .filter(x => !arr1.includes(x)))
```
