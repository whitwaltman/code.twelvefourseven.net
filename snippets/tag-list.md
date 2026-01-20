---
title: Create an array of all tags in Eleventy
tags:
- 11ty
---

Credit to [Chase McCoy](https://github.com/chasemccoy/www/blob/main/.eleventy.js).

```js
config.addCollection('tagList', function (collection) {
    let tagSet = new Set();

    collection.getAll().forEach((item) => {
        ;(item.data.tags || []).forEach((tag) => tagSet.add(tag))
    });

    return filters.filterTagList([...tagSet]);
});
```