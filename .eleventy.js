import fs from "fs";
import path from "path";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import filters from "./utils/filters.js";
import transformExternalLinks from "./utils/links.js";

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
	config.addGlobalData("layout", "layouts/base.njk");

	// Register filter functions
	Object.keys(filters).forEach((filter) => {
		config.addFilter(filter, filters[filter]);
	});

	// Create cards collection
	config.addCollection("cards", (collection) => {
		const all = collection.getFilteredByGlob("src/**/*.md");
		return all.filter((card) => !card.data.draft).sort((a, b) => {
			return a.data.created - b.data.created;
		});
	});

	// Create feed collection
	config.addCollection("feed", (collection) => {
		const all = collection.getFilteredByGlob("src/**/*");
		return all.filter((card) => !card.data.draft).sort((a, b) => {
			return a.data.date - b.data.date;
		});
	});

	// Create decks collection
	config.addCollection("decks", (collection) => {
		const all = collection.getFilteredByGlob("src/**/*").filter((c) => !c.data.draft);
		// Object where keys are folder names (decks)
		const decks = {};

		all.forEach((item) => {
			const path = item.filePathStem.split('/');
			const deckName = path[path.length - 2];

			if (deckName && deckName !== 'src') {
				if (!decks[deckName]) {
					decks[deckName] = [];
				}
				decks[deckName].push(item);
			}
		});

		return decks;
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
			input: ".",
			includes: "_includes",
			data: "_data",
			output: ".site",
		}
	};
}