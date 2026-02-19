---
title: Computed data in data directory files
---

I use a lot of data directory files in my Eleventy projects. I prefer the `dirName.11tydata.js` convention, especially since I tend to use JS to transform computed data.

This is a sample data file that handles creating a title for posts without one. It also uses the [supplied data](https://www.11ty.dev/docs/data-eleventy-supplied/) from Eleventy to set the permalink. This is another personal convention that I use because of the way I set up my project structure.

```js
export default {
    layout: "note.njk",
    eleventyComputed: {
        permalink: (data) => `/${data.page.fileSlug}/`,
        title: (data) => {
            if (data.title) return data.title;
            const slug = data.page.fileSlug.split("-").join(" ");
            return slug[0].toUpperCase() + slug.slice(1);
        }
    }
}
```