import yaml from "js-yaml";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (config) {
    config.addGlobalData("layout", "base.njk");
    config.addPassthroughCopy("assets");

    config.addPlugin(syntaxHighlight);

    config.addDataExtension("yaml", (contents) => {
        return yaml.load(contents);
    });

    // SHORTCODES
    config.addPairedShortcode("preview", (content, css = "") => {
        const escapedHTML = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        const iframeContent = `
            <!DOCTYPE html>
            <html>
                <head><style>${css}</style></head>
                <body>${content}</body>
            </html>
        `.replace(/"/g, "&quot;");

        return `
            <div class="example-container">
                <div class="example-preview">
                    <iframe srcdoc="${iframeContent}" sandbox="allow-scripts" frameborder="0"></iframe>
                </div>
                <div class="example-code">
                    <pre class="language-css"><code>${css}</code></pre>
                    <pre class="language-html"><code>${escapedHTML}</code></pre>
                </div>
            </div>
        `;
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
        markdownTemplateEngine: "njk",
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site",
        }
    };
}