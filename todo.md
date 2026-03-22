# todo

- [ ] render cards with custom styling
    - card preview different styling from card actual (?)
- [ ] create card macro?
- [ ] paginate index feed

## content

- [ ] update / fill in cards
- [ ] refactor cards
    - [ ] add some basic formatting (headers, etc)
- [ ] update `index.njk` to give [credit](https://11ty.rocks/posts/eleventy-templating-static-code-demos/) for demo implementation
- [ ] test `demo.njk` (must use `includes`!) against different demo "sizes"
- [ ] add note about style/layout bugs! (not the most responsive...)

## info architecture

- [ ] update which elements have `data-pagefind-body`
    - should only be in `card.njk` i think
- [ ] **add tag data to card layout**
- [ ] add better styling to metadata / card layout
- [ ] more / better tags
- [ ] turn snippets page into a table with description & category (??) a la [Josh Comeau](https://www.joshwcomeau.com/snippets/)

## styling

- [ ] add code block basic styles
    - [ ] bg + text color
    - [ ] overflow-x within block, scroll to view more
    - [ ] maybe add a block thing on top that states what language it is (even if I don't use a syntax highlighter) ??
- [ ] **checkbox for link styling (all blue) -- make this subtle!!**
- [ ] fix demo styling!

### mobile

- [ ] **truncate or wrap longer titles (wonky on mobile)**
- [ ] make body width larger?

## js

- [ ] [customize](https://pagefind.app/docs/ui/) pagefind config
- [ ] investigate / fix blocked CORS requests
- [ ] add copy/paste functionality to code blocks???

## completed
- [x] ~~add tags~~
- [x] ~~create tag pages~~
- [x] ~~investigate / fix search~~
- [x] ~~set title for tagged pages!!!~~
- [x] fix nav spacing