---
tags:
- eleventy
references:
- https://www.11ty.dev/docs/data-computed/
- https://www.11ty.dev/docs/dates/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
---
For a sub-directory `src/posts`, you can create `posts.11tydata.js` and set the default front-matter for the entire directory.

`eleventyComputed` allows you to inject data properties that utilize other data values. This allows you to have dynamically populated front-matter based on some pattern.

```js
export default {
    layout: "layouts/post.njk",
    eleventyComputed: {
        dateSlug: (data) => {
            const date = new Date(data.page.date);
            const result = date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
            return result.slice(-4) + "/" + result.slice(0, -4);
        },
        permalink: (data) => data.dateSlug + data.page.fileSlug + "/index.html",
    }
}
```

Be warned that setting the permalink via `eleventyComputed` might mean that you won't be able to override the permalink value manually in a file's front-matter. I'm not 100% sure if this is true, but I observed similar behavior in the past when I used this configuration, although I didn't investigate further.

One example of how this type of directory-level configuration might be helpful: I want to group a set of content in a directory; I don't want to manually set the permalinks and I don't want the permalink to include the directory name, e.g. `mywebsite.com/some-post` instead of `mywebsite.com/posts/some-post`.

I can create `/posts` in the root of my eleventy input directory, and then use JavaScript's `replace()` to modify or remove a directory from the file path.

```js
export default {
    layout: "layouts/post.njk",
    eleventyComputed: {
        permalink: (data) => data.page.filePathStem.replace("/posts/", ""),
    }
}
```