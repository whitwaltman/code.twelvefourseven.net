import { parseHTML } from "linkedom";

export default function(content) {
    // only run on html files
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
        const { document } = parseHTML(content);

        const blocks = document.querySelectorAll("pre > code");

        blocks.forEach((code) => {
            const container = code.parentElement;   // the <pre>

            const button = document.createElement("button");
            button.className = "copy-code-button";
            button.type = "button";
            button.textContent = "Copy";

            container.appendChild(button);
        });

        return "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
    }

    return content;
}