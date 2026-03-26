const isProduction = process.env.NODE_ENV === "production";

export default {
    contentType: "crib sheet",
    contentTypeLabel: "crib sheets",

    date: isProduction ? "git Last Modified" : "Last Modified",

    eleventyComputed: {
        title: (data) => data.title || data.page.fileSlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    }
}