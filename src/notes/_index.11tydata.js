const isProduction = process.env.NODE_ENV === "production";

const data = {
    layout: "card.njk",
    date: isProduction ? "git Last Modified" : "Last Modified",
    eleventyComputed: {
        permalink: (data) => {
            if (data.permalink) return data.permalink;
            return `/${data.page.fileSlug}/`;
        }
    }
}

export default data;