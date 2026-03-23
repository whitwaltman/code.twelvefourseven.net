---
title: Eleventy config
---

```js
import filters from "./utils/filters.js";
import transformExternalLinks from "./utils/links.js";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (config) {
	// Add global data variable to signal build modality
	const isProduction = process.env.NODE_ENV === "production";
	config.addGlobalData("isProduction", isProduction);

	// Add syntax highlighting plugin: https://www.11ty.dev/docs/plugins/syntaxhighlight/
	config.addPlugin(syntaxHighlight);

	// Copy public assets to output folder
	config.addPassthroughCopy({
		"./public": "/",
	});

	// Add global default layout
	config.addGlobalData("layout", "base.njk");

	// Register filter functions
	Object.keys(filters).forEach((filter) => {
		config.addFilter(filter, filters[filter]);
	});

	// Register imported links function as a transform
	config.addTransform("externalLinks", transformExternalLinks);

	return {
        // control which files 11ty will process
        templateFormats: ["md", "njk", "html"],

        // pre-process *.md files with:
		markdownTemplateEngine: "njk",

        // pre-process *.html files with:
        htmlTemplateEngine: "njk",

        // directory config
		dir: {
			input: "./src",
			includes: "../_includes",
			data: "../_data",
			output: ".site",
		}
	};
}
```