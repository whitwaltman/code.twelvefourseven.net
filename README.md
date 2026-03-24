# code.twelvefourseven.net

My personal code documentation / notes site. A proxy for my shitty working memory.

## uses

- [eleventy-plugin-syntaxhighlight](https://www.11ty.dev/docs/plugins/syntaxhighlight/) w/ Prism [a11y syntax highlight theme](https://github.com/ericwbailey/a11y-syntax-highlighting), slightly modified for personal preferences
- [pagefind](https://github.com/Pagefind/pagefind) for client-side search
- [seven-minute-tabs](https://zachleat.github.io/seven-minute-tabs/) component
- adapted implementation of [yet another copy code button](https://bobmonsour.com/blog/yet-another-copy-code-button/)
- [custom kbd](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/kbd) styling taken from MDN
- a bunch of other stuff I don't particularly care to document... but you can figure it out by [reading the source](https://blog.codinghorror.com/learn-to-read-the-source-luke/)

Deploys to Cloudflare via Pages.

## notes

`_utils` contains a bunch of single-use and grouped-function files that I import or invoke from somewhere else. Most of them are used in `.eleventy.js` to keep my config file relatively small.

I have some [single shortcode](https://www.11ty.dev/docs/languages/nunjucks/#single-shortcode) definitions that probably don't need to be shortcodes, but I included them for a specific reason, and I want to document it here in case I forget and wonder why I did that in the first place.

There are a few crib sheets I have that catalog various hotkeys and keyboard shortcuts/commands. I like to style these in a distinct manner and use semantic HTML in my markup, which means writing `<kbd>Some key</kbd>` several times in a row. This is fine, but the "some key" text is usually quite short (often a single character), so that means a lot of opening and closing tags right next to each other, which can get quite messy.

That's the more necessary justification for the `kbd` shortcode I created. I also have a `tmuxPrefix` shortcode, which allows me to insert my custom prefix automatically by calling the shortcode. The nice thing about this is that if I ever decide to change my prefix, I can just change the shortcode once and it'll propagate down to every instance it's used.