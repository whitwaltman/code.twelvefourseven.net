import yaml from "js-yaml";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (config) {
    config.addGlobalData("layout", "base.njk");
    config.addPassthroughCopy("assets");
    config.addPlugin(syntaxHighlight);

    config.addDataExtension("yaml", (contents) => {
        return yaml.load(contents);
    });

    // COLLECTIONS
    config.addCollection("posts", (collection) => {
        return collection.getFilteredByGlob("src/**/*.md");
    });

    config.addCollection("tagList", function (collection) {
        let tagSet = new Set();
        collection.getAll().forEach((item) => {
            ;(item.data.tags || []).forEach((tag) => tagSet.add(tag));
        });
        return [...tagSet];
    })

    // CUSTOM PORT
    config.setServerOptions({
        port: 2026,
    });    

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site",
        }
    };
}