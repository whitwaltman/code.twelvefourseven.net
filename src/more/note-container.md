---
title: Note container
tags: [misc]
---

```html
<span class="note-container" role="button"
    tabindex="0" aria-expanded="false"
    aria-label="Toggle note"><span class="note">Place your note here</span></span>
```

```css
body.js-enabled {
    counter-reset: fn;
}
.js-enabled .note-container {
    cursor: pointer;
    counter-increment: fn;
}
.js-enabled .note-container[aria-expanded="false"]::before {
    content: "[" counter(fn);
}
.note-container::before {
    content: "[";
}
.note-container::after {
    content: "]";
}
.js-enabled .note {
    display: none;
}
.note-container[aria-expanded="true"] .note {
    display: inline;
    font-style: italic;
}
.note-container {
    display: inline;
    color: darkgreen;
}
.note-container:focus {
    outline: none;
}
.note-container:focus-visible {
    outline: 2px solid blue;
    outline-offset: 2px;
    border-radius: 2px;
}
```

```js
document.body.classList.add("js-enabled");
const containers = document.querySelectorAll(".note-container");
const toggleNote = (el) => {
    const isExpanded = el.getAttribute("aria-expanded") === "true";
    el.setAttribute("aria-expanded", !isExpanded);
}
containers.forEach((el) => {
    el.addEventListener("click", () => toggleNote(el));
    el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleNote(el);
        }
    });
});
```