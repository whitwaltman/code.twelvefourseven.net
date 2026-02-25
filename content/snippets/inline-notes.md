+++
title = "Inline sidenotes with HTML/CSS/JS"
date = 2026-02-25
+++

I adapted this example from the note containers used in [browser.engineering](https://browser.engineering).

My implementation adds [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes to make it more accessible for people with disabilities, since [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) doesn't inherently represent anything.

It also adds fallback styling for browsers with JS disabled.


```html
<main>
	<p>Here's some text content
  	<span class="note-container"
  				role="button" tabindex="0"
  				aria-expanded="false"
  				aria-label="Toggle note">
			<span class="note">with a secret!</span>
		</span>.
	</p>
</main>
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

```css
body.js-enabled {
	counter-reset: fn;
}

.js-enabled .note-container {
	cursor: pointer;
	counter-increment: fn;
}

.js-enabled .note-container::before {
	content: "[" counter(fn);
}

.note-container::before {
	content: "[";
}

.note-container::after {
	content: "]";
}

.note-container[aria-expanded="true"]::before,
.note-container[aria-expanded="true"]::after {
	content: "...";
	user-select: none;
	opacity: 0.6;
	margin: 0 2px;
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
	color: slategray;
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