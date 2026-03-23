import { parseHTML } from "linkedom";

export default function(content) {
	if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
		const { document } = parseHTML(content);
		const links = Array.from(document.querySelectorAll("a"));

		links.forEach((link) => {
			const href = link.getAttribute("href");
			const isExternal = href && href.startsWith("http");

			if (isExternal) {
				link.classList.add("external");
				link.setAttribute("target", "_blank");
				link.setAttribute("rel", "noopener noreferrer");
			}
		});

		return "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
	}

	return content;
};