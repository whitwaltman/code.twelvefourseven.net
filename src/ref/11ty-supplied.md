---
title: Eleventy supplied data
source: https://www.11ty.dev/docs/data-eleventy-supplied/
---

```js
const page = {
    url: "/11ty-supplied/",
    fileSlug: "11ty-supplied",
    filePathStem: "/ref/11ty-supplied",
    inputPath: "./src/ref/11ty-supplied.md",
}
```

- url: {{ page.url }}
- file slug: {{ page.fileSlug }}
- file path stem: {{ page.filePathStem }}
- input path: {{ page.inputPath }}