export default {
    layout: "post.njk",
    category: "svelte",
    eleventyComputed: {
        permalink: (data) => `/${data.category}/${data.page.fileSlug}/`
    }
}