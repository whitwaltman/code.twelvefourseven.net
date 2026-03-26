const isProduction = process.env.NODE_ENV === "production";

export default {
    contentType: "snippet",
    contentTypeLabel: "snippets",

    date: isProduction ? "git Last Modified" : "Last Modified",

    eleventyComputed: {
        snippetCategory: (data) => {
            const parts = data.page.filePathStem.split("/");
            return parts.length > 3 ? parts[2] : null;
        },

        categoryLabel: (data) => {
            if (!data.snippetCategory) return null;
            return data.sections.snippets.children?.[data.snippetCategory]?.label || data.snippetCategory;
        }
    }
}