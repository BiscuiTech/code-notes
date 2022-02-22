---
title: React State
tags:
  - javascript
  - react
---

# setState with variable name

```tsx
// function handler
handleChange = (e) => {
  const { name, type, value } = e.target;
  const val = type === "number" ? parseFloat(value) : value;
  this.setState({ ...state, [name]: val });
};
// input
<label htmlFor="name">
  Nom
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Name"
    required
    value={this.state.name}
    onChange={this.handleChange}
  />
</label>;
```
