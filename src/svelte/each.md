---
title: Each blocks in Svelte
tags:
- iteration
- syntax
references:
- https://svelte.dev/docs/svelte/each
---

Svelte uses `{#each collection as item}...{/each}` to iterate over arrays, array-like objects, and iterables.

If you want to perform a loop `n` times, the "collection" you use is just `{ length: n }`.

```jsx
{#each { length: rows * cols } as _, i}
    <Cell index={i} />
{/each}
```

[View demo](https://svelte.dev/playground/28e3db6d281941339ee242328f77f5ec?version=5.53.0)