---
title: Rapid project scaffolding w/ degit
---

For projects that have a repeat setup step, I like to create an opinionated starter repo that contains all my go-to defaults.

For instance, I have [this](https://github.com/whitwaltman/11ty-starter) Eleventy starter kit I made. It needs a bit of fine-tuning, and I'd like to add a branch that includes Pagefind, but it's so much faster than doing everything by hand.

I simply run:

```sh
npx degit whitwaltman/11ty-starter my-new-project
```

And `cd` into the repo to get started.

---

You can also clone a specific subdirectory or branch:

```sh
npx degit solidjs/templates/js my-solid-app
```

(for when I create that pagefind branch)

```sh
npx degit whitwaltman/11ty-starter#pagefind project-with-search
```