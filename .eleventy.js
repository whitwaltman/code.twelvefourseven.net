import filters from "./_utils/filters.js";
import shortcodes from "./_utils/shortcodes.js";
import transformExternalLinks from "./_utils/links.js";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (config) {
	// Add global data variable to signal build modality
	const isProduction = process.env.NODE_ENV === "production";
	config.addGlobalData("isProduction", isProduction);

	// Add syntax highlighting plugin: https://www.11ty.dev/docs/plugins/syntaxhighlight/
	config.addPlugin(syntaxHighlight);

	// Configure bundle for CSS
	config.addBundle("css");

	// Copy assets to output folder
	config.addPassthroughCopy({
		"./public": "/",
  		"node_modules/@zachleat/seven-minute-tabs/seven-minute-tabs.js": "js/seven-minute-tabs.js",
	});

	// Add global default layout
	config.addGlobalData("layout", "base.njk");

	// Register filter functions
	Object.keys(filters).forEach((filter) => {
		config.addFilter(filter, filters[filter]);
	});

	// Register paired shortcodes
	Object.keys(shortcodes).forEach((shortcode) => {
		config.addPairedShortcode(shortcode, shortcodes[shortcode]);
	})
	// config.addPairedShortcode("tabsContainer", tabsContainer);
	// config.addPairedShortcode("tabWrapper", tabWrapper);

	// Create collections
	config.addCollection("crib", (collection) => {
		return collection.getFilteredByGlob("src/crib/**/*");
	});

	config.addCollection("notes", (collection) => {
		return collection.getFilteredByGlob("src/notes/**/*");
	});

	config.addCollection("snippets", (collection) => {
		return collection.getFilteredByGlob("src/snippets/**/*");
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
			layouts: "../_layouts",
			data: "../_data",
			output: ".site",
		}
	};
}