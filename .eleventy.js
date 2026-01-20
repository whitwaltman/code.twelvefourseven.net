export default async function (config) {
    config.addGlobalData("layout", "base.liquid");
    config.addPassthroughCopy("assets");

    config.addCollection("notes", (collection) => {
        return collection.getFilteredByGlob("notes/*.md");
    });

    config.addCollection("patterns", (collection) => {
        return collection.getFilteredByGlob("patterns/*.md");
    });

    config.addCollection("quickFixes", (collection) => {
        return collection.getFilteredByGlob("quick-fixes/*.md");
    });

    config.addCollection("snippets", (collection) => {
        return collection.getFilteredByGlob("snippets/*.md");
    });

    config.setServerOptions({
        port: 2026,
    });    

    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site",
        }
    };
}