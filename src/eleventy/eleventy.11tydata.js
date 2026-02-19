export default {
    layout: "post.njk",
    category: "eleventy",
    eleventyComputed: {
        permalink: (data) => `/${data.category}/${data.page.fileSlug}/`
    }
}