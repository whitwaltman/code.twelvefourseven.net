export default {
    layout: "post.njk",
    eleventyComputed: {
        permalink: (data) => {
            if (data.category) {
                return `/${data.category}/${data.page.fileSlug}/`;
            }
            return `/${data.page.fileSlug}/`;
        },
        // tags: (data) => {
        //     const c = data.category;
        //     return c ? [c] : [];
        // }
    }
}