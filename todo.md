# todo

- [ ] *make custom styles for seven-min-tabs*
    - shrink tab label padding
    - add outline / distinct style for selected tab
- [ ] Design grid-based crib sheet layout
    - do test run first before templatizing it
- [ ] toc for crib sheets??
    - see [plugin](https://plug11ty.com/plugins/table-of-contents/)
- [ ] add callout component ????
    - maybe just use custom styling on an `<aside>` element + class selector?
- [ ] redesign / edit link styling on index page
    - box shadow is kind of aggressive
    - plus i kinda chose the bg colors haphazardly
- [ ] edit link styling to be uniform regardless of `:visited`

---

## scratch

- still trying to figure out if / how to add language to code blocks and/or file name (optionally)
- wanna try out using the diff feature in prism!

- update search results styling
    - kinda wonky on mobile
    -   zooms in when field is in focus so you can't see the results that well
    - title and link are duped: either remove title from pagefind index data or collapse context
    - make the whole result clickable, not just the link at the top
    - remove the list styling
    - add margin btwn results
    - [ ] fix spacing / layout on search modal
- **add content**
    - tmux
    - add more notes! (*evergreen content*)
        - crib sheets and snippets are meant to be quick reference
- add more useful index layout / styling
    - surface most helpful stuff at the top
    - maybe add descriptions / context
        - honestly even just definitions of what each type of collection / section actually is/does would be a huge improvement
- tags / metadata??
    - version number / machine
- add description?
- figure out if i want to use tags
    - leaning no, but could be helpful for something like "config" general snipet
    - for now, don't use because it's unnecessary

## old

migrate from:
- `~/Desktop/_dir/cache/`
- `~/Desktop/_dir/summaries/`

---

# done

- [x] ~~add collections for each category / type~~
    - [x] ~~separate snippets (in index) by category / type (label them too!)~~
- [x] ~~add copy button for snippet blocks~~
- [x] ~~*fix size of `<code>` element renderings*~~
    - sorta done, but i kinda wanna go back and clean up the styling later
- [x] ~~add type hierarchy stuff back to styles (`h2`, etc.)~~
- [x] ~~**add collection index pages**~~
    - [x] ~~`/crib`~~
    - [x] ~~`/notes`~~
    - [x] ~~`/snippets`~~
- ~~make sure any index pages (e.g. `snippets/eleventy/`) use the base layout template (don't index their contents)~~
- ~~add title?~~
- [x] ~~add back buttons and/or nav breadcrumbs (??)~~
- ~~footer flex display has a weird wrap on mobile~~
    - ~~can fix by changing to `flex-direction: column;` when at a certain breakpoint~~
- ~~**code copy button is anchored on scroll**~~
    - ~~covers some comments~~
    - ~~moves with scroll instead of staying fixed~~
- ~~figure out if/how i want to display hotkey commands (emacs, nvim)~~