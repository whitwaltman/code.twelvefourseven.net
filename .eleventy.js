import { execSync } from "child_process";
import filters from "./utils/filters.js";
import transformExternalLinks from "./utils/links.js";

export default async function (config) {
	// Add global data variable to signal build modality
	const isProduction = process.env.NODE_ENV === "production";
	config.addGlobalData("isProduction", isProduction);

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
		const all = collection.getFilteredByGlob("cards/**/*.md");
		return all.filter((card) => !card.data.draft);
	});

	// Create starred collection
	config.addCollection("starred", (collection) => {
		const all = collection.getFilteredByGlob("cards/**/*.md");
		return all.filter((card) => card.data.starred);
	})

	// Add list of tags
	config.addCollection('tagList', function (collection) {
		let tagSet = new Set();
		collection.getAll().forEach((item) => {
			;(item.data.tags || []).forEach((tag) => tagSet.add(tag));
		});
		return [...tagSet];
	})

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