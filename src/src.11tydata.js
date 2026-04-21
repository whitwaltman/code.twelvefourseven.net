const data = {
    layout: "card.njk",
    eleventyComputed: {
        permalink: (data) => `${data.fileSlug}.html`
    }
}