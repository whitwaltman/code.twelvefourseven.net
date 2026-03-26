const isProduction = process.env.NODE_ENV === "production";

const data = {
    layout: "page.njk",
    eleventyComputed: {
        permalink: (data) => (isProduction && data.draft) ? false : data.permalink,
        
        eleventyExcludeFromCollections: (data) => (isProduction && data.draft) ? true : data.eleventyExcludeFromCollections,

        breadcrumbs: (data) => {
            if (isProduction && data.draft) return false;
            const urlPath = data.page.url.split("/").filter(Boolean);
            return urlPath.map((part, index) => {
                let info = data.sections[part] || { label: part.replace(/-/g, " ") };

                if (index === 1 && urlPath[0] === "snippets" && data.sections.snippets.children?.[part]) {
                    info = data.sections.snippets.children[part];
                }

                return {
                    label: info.label,
                    url: "/" + urlPath.slice(0, index + 1).join("/") + "/",
                };
            });
        },
    }
};

export default data;