export default {
    layout: "post.liquid",
    eleventyComputed: {
        permalink: (data) => `/${data.page.fileSlug}/`
    }
}