import yaml from "js-yaml";

export default async function (config) {
    config.addGlobalData("layout", "base.liquid");
    config.addPassthroughCopy("assets");

    config.addDataExtension("yaml", (contents) => {
        return yaml.load(contents);
    });

    // COLLECTIONS
    config.addCollection("posts", (collection) => {
        return collection.getFilteredByGlob("src/**/*.md");
    });

    // CUSTOM PORT
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