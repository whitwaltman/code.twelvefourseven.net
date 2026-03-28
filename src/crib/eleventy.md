---
title: Eleventy crib sheet
code: true
templateEngineOverride: "md"
---

## debugging

Create an object with frontmatter data and inspect its contents

```nunjucks
{{ { date: date, tags: tags | dump } }}
```