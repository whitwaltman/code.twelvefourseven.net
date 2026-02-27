---
title: Debugging CSS
tags:
- css
- debugging
- quick-ref
---

```js
const root = document.documentElement;
const styles = window.getComputedStyle(root);
const myVar = styles.getPropertyValue("--myVar");
```