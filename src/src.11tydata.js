const isProduction = process.env.NODE_ENV === "production";

const data = {
    layout: "page.njk",
    date: isProduction ? "git Last Modified" : "Last Modified",
    eleventyComputed: {
        permalink: (data) => {
            if (isProduction && data.draft) return false;
            return data.permalink;
        }
    }
};

export default data;