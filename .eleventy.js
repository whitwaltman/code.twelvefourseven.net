import filters from "./_utils/filters.js";
import inline from "./_utils/shortcodes/inline.js";
import block from "./_utils/shortcodes/block.js"
import insertCopyButton from "./_utils/transforms/codeblocks.js";
import transformExternalLinks from "./_utils/transforms/links.js";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

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

	// Add syntax highlighting plugin: https://www.11ty.dev/docs/plugins/syntaxhighlight/
	config.addPlugin(syntaxHighlight);

	// Create app-level bundles
	config.addBundle("css");
	config.addBundle("js");

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

	// Create content collections
	config.addCollection("crib", (collection) => {
		return collection.getAll().filter(item => item.data.contentTypeLabel === "crib sheets");
	});

	config.addCollection("notes", (collection) => {
		return collection.getAll().filter(item => item.data.contentTypeLabel === "notes");
	});

	config.addCollection("snippets", (collection) => {
		return collection.getAll().filter(item => item.data.contentTypeLabel === "snippets");
	});

	// Create categories for snippet organization
	config.addCollection("snippetCategories", (collection) => {
		const snippets = collection.getFilteredByGlob("src/snippets/**/*");
		const categories = new Set();

		snippets.forEach((item) => {
			// Structure: /snippets/[category]/[post-name]
			const parts = item.filePathStem.split("/");
			// parts[0] is "", parts[1] is "snippets", parts[2] is the category
			if (parts[1] === "snippets" && parts.length > 3) {
				categories.add(parts[2]);
			}
		});
		
		return Array.from(categories).sort();
	});

	// Create reverse chronological feed
	config.addCollection("feed", (collection) => {
		return collection.getAllSorted().toReversed().filter((item) => {
			return item.data.layout === "page.njk";
		});
	});

	// Register utility functions as transforms
	config.addTransform("externalLinks", transformExternalLinks);
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