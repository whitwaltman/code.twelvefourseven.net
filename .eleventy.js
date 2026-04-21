import filters from "./_utils/filters.js";
import inline from "./_utils/shortcodes/inline.js";
import block from "./_utils/shortcodes/block.js"
import insertCopyButton from "./_utils/transforms/codeblocks.js";
import transformExternalLinks from "./_utils/transforms/links.js";

function registerShortcodes(config, group) {
	if (group.single) {
		Object.entries(group.single).forEach(([name, fn]) => {
			config.addShortcode(name, fn);
		});
	}

	if (group.paired) {
		Object.entries(group.paired).forEach(([name, fn]) => {
			config.addPairedShortcode(name, fn);
		});
	}
}

export default async function (config) {
	// Add global data variable to signal build modality
	const isProduction = process.env.NODE_ENV === "production";
	config.addGlobalData("isProduction", isProduction);

	// Create app-level bundles
	config.addBundle("css");
	config.addBundle("js");

	// Prevent full rebuilds of CSS in development mode
	if (!isProduction) {
		config.addPassthroughCopy({
			"./_includes/css": "/",
		});
	}

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

	// Register all shortcodes
	registerShortcodes(config, inline);
	registerShortcodes(config, block);

	// Register utility functions as transforms
	if (isProduction) config.addTransform("externalLinks", transformExternalLinks);
	config.addTransform("copyCode", insertCopyButton);

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