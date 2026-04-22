import { createHash } from "crypto";
import { create } from "flat-cache";
import { resolve } from "node:path";
import { getSingletonHighlighter } from "shiki";

export default async function (config) {
    const highlighter = await getSingletonHighlighter({
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

    config.amendLibrary("md", (mdLib) => {
        mdLib.set({
            highlight: (code, lang) => {
                const hash = createHash("md5").update(code).digest("hex");

                const cache = create({
                    id: hash,
                    cacheDir: resolve("./.cache/shiki"),
                });

                const cachedValue = cache.getKey(hash);
                if (cachedValue) {
                    return cachedValue;
                }

                const highlightedCode = highlighter.codeToHtml(code, {
                    lang: lang,
                    theme: "monokai",
                });

                cache.setKey(hash, highlightedCode);
                cache.save();

                return highlightedCode;
            },
        });
    });
}
