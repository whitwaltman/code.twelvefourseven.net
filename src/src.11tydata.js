const isProduction = process.env.NODE_ENV === "production";

const data = {
    layout: "page.njk",
    date: isProduction ? "git Last Modified" : "Last Modified",
    eleventyComputed: {
        title: (data) => {
            if (data.title) return data.title;
            if (data.layout === "page.njk") {
                const slug = data.page.fileSlug.split("-").join(" ");
                return slug[0].toUpperCase() + slug.slice(1);
            }
            return false;
        },
        permalink: (data) => {
            if (isProduction && data.draft) return false;
            return data.permalink;
        },
        eleventyExcludeFromCollections: (data) => {
            if (isProduction && data.draft) return true;
            return data.eleventyExcludeFromCollections;
        },
        breadcrumbs: (data) => {
            if (isProduction && data.draft) return false;
            const urlPath = data.page.url.split("/").filter((part) => part);
            return urlPath.map((part, index) => {
                return {
                    label: part.replace(/-/g, " "),
                    url: "/" + urlPath.slice(0, index + 1).join("/") + "/",
                };
            });
        },
    }
};

export default data;