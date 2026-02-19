---
title: Each blocks in Svelte
tags:
- iteration
- svelte
---

Svelte uses `{#each collection as item}...{/each}` to iterate over arrays, array-like objects, and iterables.

```jsx
{#each Array(rows * cols) as _, i}
    <Cell index={i} />
{/each}
```