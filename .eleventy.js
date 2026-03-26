import filters from "./_utils/filters.js";
import singleShortcodes from "./_utils/single.js";
import pairedShortcodes from "./_utils/paired.js";
import insertCopyButton from "./_utils/codeblocks.js";
import transformExternalLinks from "./_utils/links.js";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

function renderComponent(ctx, template, data) {
	return ctx.renderTemplate(
		`{% include "${template}" %}`,
		data
	);
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
	Object.keys(singleShortcodes).forEach((sc) => {
		config.addShortcode(sc, singleShortcodes[sc]);
	});

	Object.keys(pairedShortcodes).forEach((sc) => {
		config.addPairedShortcode(sc, pairedShortcodes[sc]);
	});

	config.addPairedShortcode("note", function(content) {
		return renderComponent(this, "components/note.njk", { content });
	});

	// Create content collections
	config.addCollection("crib", (collection) => {
		return collection.getFilteredByGlob("src/crib/**/*");
	});

	config.addCollection("notes", (collection) => {
		return collection.getFilteredByGlob("src/notes/**/*");
	});

	config.addCollection("snippets", (collection) => {
		return collection.getFilteredByGlob("src/snippets/**/*");
	});

	// Create categories for snippet organization
	config.addCollection("snippetCategories", (collection) => {
		const snippets = collection.getFilteredByGlob("src/snippets/**/*");
		const categories = new Set();

		snippets.forEach((item) => {
			const parts = item.filePathStem.split("/");
			if (parts.length > 3) {
				categories.add(parts[2]);
			}
		});

		return Array.from(categories);
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