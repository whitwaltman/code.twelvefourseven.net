+++
title = "Debugging CSS"
date = 2026-02-21
+++

```js
const root = document.documentElement;
const styles = window.getComputedStyle(root);
const myVar = styles.getPropertyValue("--myVar");
```