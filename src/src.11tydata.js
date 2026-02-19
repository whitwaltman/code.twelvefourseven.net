export default {
    layout: "post.njk",
    eleventyComputed: {
        permalink: (data) => {
            if (data.category) {
                return `/${data.category}/${data.page.fileSlug}/`;
            }
            return `/${data.page.fileSlug}/`;
        },
        title: (data) => {
            if (data.title) return data.title;
            const slug = data.page.fileSlug.split("-").join(" ");
            return slug[0].toUpperCase() + slug.slice(1);
        },
        category: (data) => {
            const parts = data.page.filePathStem.split("/");
            const subpath = parts[2];
            if (subpath === data.page.fileSlug) return "";
            return subpath;
        }
        // tags: (data) => {
        //     const c = data.category;
        //     return c ? [c] : [];
        // }
    }
}