---
title: Debugging CSS
tags:
  - css
  - debugging
  - quick-ref
created: '2026-02-21T18:35:36.644Z'
---

```js
const root = document.documentElement;
const styles = window.getComputedStyle(root);
const myVar = styles.getPropertyValue("--myVar");
```
