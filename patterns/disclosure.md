---
title: Accessible disclosure / toggle panel
tags:
- a11y
- ui
- svelte
---

## Use when
You need a panel that expands/collapses (notes, filters, sidebar, FAQ).
Works for: "speaker notes", inspector side panel, settings drawer.

## Key requirements
- The toggle must be a <button>
- Use `aria-expanded` and `aria-controls`
- The panel should be `hidden` when collapsed (removes from tab order)

## Minimal structure
```svelte
<script lang="ts">
  let open = false;
  const panelId = "notes-panel";
</script>

<button
  type="button"
  aria-controls={panelId}
  aria-expanded={open}
  on:click={() => (open = !open)}
>
  {open ? "Hide notes" : "Show notes"}
</button>

<section id={panelId} hidden={!open}>
  <h2 class="sr-only">Notes</h2>
  <slot />
</section>
```

## Styling notes

If you want the panel to collapse space, use hidden (not just CSS opacity).

If you want animated height, don’t use hidden; use CSS + aria-hidden, but then manage focus carefully.

## Gotchas

Don’t attach click handlers to <div> for toggles.

If panel contains inputs: when closing, consider moving focus back to the toggle button.