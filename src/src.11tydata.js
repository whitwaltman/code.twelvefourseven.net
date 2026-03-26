const isProduction = process.env.NODE_ENV === "production";

const typeMap = {
    "crib": "crib sheets",
    "notes": "notes",
    "snippets": "snippets",
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const data = {
    layout: "page.njk",
    date: isProduction ? "git Last Modified" : "Last Modified",
    eleventyComputed: {
        title: (data) => {
            if (data.title) return data.title;
            if (data.layout === "page.njk") {
                const slug = data.page.fileSlug.split("-").join(" ");
                return capitalize(slug);
            }
            return false;
        },

        permalink: (data) => {
            if (isProduction && data.draft) return false;
            return data.permalink;
        },

        contentType: (data) => {
            const stem = data.page.filePathStem;
            const match = Object.keys(typeMap).find(dir => stem.startsWith(`/${dir}/`));
            return match || "page";
        },

        contentTypeLabel: (data) => {
            return typeMap[data.contentType] || data.contentType;
        },

        snippetCategory: (data) => {
            const parts = data.page.filePathStem.split("/");
            if (parts[1] === "snippets" && parts.length > 3) return parts[2];
            return null;
        },
        
        eleventyExcludeFromCollections: (data) => {
            if (isProduction && data.draft) return true;
            return data.eleventyExcludeFromCollections;
        },

        breadcrumbs: (data) => {
            if (isProduction && data.draft) return false;
            const urlPath = data.page.url.split("/").filter(Boolean);

            return urlPath.map((part, index) => {
                let label = part.replace(/-/g, " ");

                if (index === 0 && typeMap[part]) {
                    label = typeMap[part];
                }

                if (data.contentType === "snippet" && index === 1 && part === data.snippetCategory) {
                    label = data.snippetCategory.replace(/-/g, " "); // or custom mapping
                }

                if (index === urlPath.length - 1 && data.title) {
                    label = data.title;
                }

                return {
                    label: label,
                    url: "/" + urlPath.slice(0, index + 1).join("/") + "/",
                };
            });
        },
    }
};

export default data;