// https://github.com/11ty/11ty-website/blob/5403f2b853e09165bec8bc6f7466a6a041487bcc/src/docs/docs.11tydata.js#L5-L7
const isProduction = process.env.NODE_ENV === "production";

const data = {
    date: isProduction ? "git Last Modified" : "Last Modified",
    eleventyComputed: {
        deck: (data) => {
            // ASSUMES ALL CARDS ARE LOCATED IN "src/DECK/**"
            return data.page.filePathStem.split("/")[2];
        },
        permalink: (data) => {
            if (isProduction && data.draft) return false;
            return `${data.deck}/${data.page.fileSlug}/`;
        },
        tags: (data) => {
            if (data.tags) return data.tags;
            return [];
        }
    }
};

export default data;