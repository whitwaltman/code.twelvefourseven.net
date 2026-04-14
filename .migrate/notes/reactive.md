---
title: On reactive frameworks
code: false
tabs: false
draft: true
---
Most modern web frameworks are reactive, meaning the UI automatically updates in response to underlying state changes.

But reactivity is a *behavioral property* that can be achieved in a number of different ways.

- React (the framework) uses "coarse-grained" reactivity via state + re-render.
- Vue uses proxies/signals
- Svelte is reactive via compile-time transforms
- SolidJS uses "fine-grained" signals
- Angular is reactive with change detection + RxJS

These frameworks are all reactive by default. Reactivity is a first-class feature, the dominant paradigm everything else is built around.

Older frameworks like Ruby on Rails (classic MVC), Django, and Flask are driven by **requests**, not state changes. Since they're not reactive by default, UI updates typically happen via full page reloads or manual JS. Some of them have ways of incorporating reactivity, but it's usually not supported directly.