const filters = {
	chop: (str) => str.slice(0, -1),
	
	typeof: (val) => typeof val,

	fmtDate: (dateObj) => {
		return dateObj.toDateString();
	},

	fmtTime: (dateObj) => {
		return dateObj.toLocaleTimeString("en-US", { timeZone: "UTC" });
	},

	unslug: (slug) => {
		return slug.replace(/\//g, " ").split("-").join(" ");
	},

	capitalize: (str) => {
		return str[0].toUpperCase() + str.slice(1);
	},

	trim: (str) => {
		if (str.length <= 36) return str;
		const words = str.split(" ");
		let result = "";
		let idx = 0;
		while (result.length < 36) {
			result += words[idx] + " ";
			idx += 1;
		}
		return result.slice(0, -1) + "...";
	},

	filterBySnippetCategory: function (collection, category) {
		return collection.filter((item) => {
			const parts = item.filePathStem.split("/");
			const itemCategory = (parts[1] === "snippets" && parts.length > 3) ? parts[2] : null;
			return itemCategory === category;
		});
	},
};

export default filters;