- need to figure out if i want to keep copy button
    - should disable for now since it's not really relevant
    - ok i disabled it. just have to comment those lines back in later if i want to re-enable it (`base.njk`, `.eleventy.js` (2 lines))
- should i have filtering on the index page to help with surfacing relevant info?
    - kind of feels like i should just add stuff until it gets unwieldy, and then implement better structure and nav.

---

## Tue Apr 21 / 6:07 PM 
- made a bunch of edits and changes; pretty happy w/ where i'm at right now
- still thinking about whether i want to add the copy code button back in
    - for now, the answer is no
    - but it could potentially be useful for things like my note container
        - maybe that's a separate use case altogether. or it needs its own section and IA design
- need to go take a break cuz i haven't eaten since like 9 am
- might be cool to add some "pinning" functionality or something? cards that are particularly relevant for me rn can get pinned
    - simplest implementation would be to add that as front matter and then render accordingly
    - a more complex but useful approach might be a client-side js thing with browser storage, but that's way out of scope right now