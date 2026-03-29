## content

- migrate from:
    - `~/Desktop/_dir/cache/`
    - `~/Desktop/_dir/summaries/`

## structure (?)

- toc for crib sheets??
    - see [plugin](https://plug11ty.com/plugins/table-of-contents/)
    - similar to ruby style guide
    - quickly jump to what you're looking for


## styling / layout

- consider doing a split panel (left/right for wider screen, top/bottom for narrower screen) with preview and code

- styling of short, instructional code blocks (see `/crib/tmux`)
    - grouping together?
    - want to add description / explanation usually
    - sometimes have lots of similar short commands

- add callout component ????
    - maybe just use custom styling on an `<aside>` element + class selector?

- TODO: add reference section to page layout

- TODO: edit `grid.css`: styling of panes
    - space between command rows
    - alternating colors / divider ? for more contrast / easier visual scanning

---

## braindump


- [ ] MAKE DEMO TABS ACCESSIBLE
- [ ] EDIT DEMO TAB STYLING (it's basically material ui rn)
- [ ] add hide/show comments functionality


- [ ] move copy code button above code block (covers code in long one-line blocks)
    - [ ] also add language above code block

- [ ] *make custom styles for seven-min-tabs*
    - shrink tab label padding
    - add outline / distinct style for selected tab
- [ ] Design grid-based crib sheet layout
    - do test run first before templatizing it

- TODO: add tailwind crib sheet (spacing calculator! favorite colors!)
- add named web colors crib sheet

- could add a bit of js to swap tmux prefixes out based on client input (low priority)

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