const isProduction = process.env.NODE_ENV === "production";

const clean = (str) => {
    if (str.length <= 30) return str;
    const words = str.split(" ");
    let result = "";
    let idx = 0;
    while (result.length < 30) {
        result += words[idx] + " ";
        idx += 1;
    }
    return result.slice(0, -1) + "...";
};

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

                if (index === urlPath.length - 1 && data.layout === "page.njk" && data.title) {
                    info = { label: clean(data.title.toLowerCase()) };
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