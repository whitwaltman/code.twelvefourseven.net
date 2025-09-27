export default {
    layout: "layouts/post.njk",
    eleventyComputed: {
        permalink: (data) => data.page.filePathStem.replace("/posts/", ""),
    }
}