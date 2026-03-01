// https://github.com/11ty/11ty-website/blob/5403f2b853e09165bec8bc6f7466a6a041487bcc/src/docs/docs.11tydata.js#L5-L7
const isProduction = process.env.NODE_ENV === "production";

const data = {
    layout: "layouts/snippet.njk",
    date: isProduction ? "git Last Modified" : "Last Modified",
    templateEngineOverride: "njk, md",
    eleventyComputed: {
        permalink: (data) => `/${data.page.fileSlug}/`,
        title: (data) => {
            if (data.title) return data.title;
            const slug = data.page.fileSlug.split("-").join(" ");
            return slug[0].toUpperCase() + slug.slice(1);
        },
        tags: (data) => {
            if (data.tags) return data.tags;
            return [];
        }
    }
};

export default data;