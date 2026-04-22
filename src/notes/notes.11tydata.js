const isProduction = process.env.NODE_ENV === "production";

const data = {
    layout: "card.njk",
    date: isProduction ? "git Last Modified" : "Last Modified",
    eleventyComputed: {
        permalink: (data) => `/${data.page.fileSlug}/`
    }
}

export default data;