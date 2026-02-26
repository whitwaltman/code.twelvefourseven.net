import filters from "./utils/filters.js";
import transformExternalLinks from "./utils/links.js";
import searchFilter from "./utils/searchFilter.js";

export default async function (config) {
	// Add global data variable to signal build modality
	const isProduction = process.env.NODE_ENV === "production";
	config.addGlobalData("isProduction", isProduction);

	// Copy public assets to output folder
	config.addPassthroughCopy({
		"./public": "/",
	});

	// Register filter functions
	Object.keys(filters).forEach((filter) => {
		config.addFilter(filter, filters[filter]);
	});

	// Add search filter
	config.addFilter("search", searchFilter);

	// Create cards collection
	config.addCollection("cards", (collection) => {
		const all = collection.getFilteredByGlob("cards/**/*.md");
		return all.filter((card) => !card.data.draft);
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
			output: "_site",
		}
	};
}