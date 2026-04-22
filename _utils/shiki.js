import { createHash } from "crypto";
import { create } from "flat-cache";
import { resolve } from "node:path";

export default async function (config) {
    config.amendLibrary("md", () => {});

    config.on("eleventy.before", async () => {
        const shiki = await import("shiki");
        const highlighter = await shiki.getSingletonHighlighter({
            themes: ["monokai"],
            langs: [
                "astro",
                "diff",
                "html",
                "css",
                "javascript",
                "json",
                "python",
                "ruby",
                "svelte",
                "swift",
                "typescript",
                "zsh",
            ],
        });

        config.amendLibrary("md", function(mdLib) {
            return mdLib.set({
                highlight: function (code, lang) {
                    const hash = createHash('md5').update(code).digest("hex");

                    const cache = create({
                        id: hash,
                        cacheDir: resolve("./.cache/shiki"),
                    });

                    const cachedValue = cache.getKey(hash);

                    if (cachedValue) {
                        return cachedValue;
                    }

                    let highlightedCode = highlighter.codeToHtml(code, {
                        lang: lang,
                        theme: "monokai",
                    });

                    cache.setKey(hash, highlightedCode);
                    cache.save();

                    return highlightedCode;
                },
            });
        });
    });
}
