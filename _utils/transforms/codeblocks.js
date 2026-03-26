import { parseHTML } from "linkedom";

export default function(content) {
    // only run on html files
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
        const { document } = parseHTML(content);

        const blocks = document.querySelectorAll("pre > code");

        blocks.forEach((code) => {
            const pre = code.parentElement;

            // create wrapper div
            const wrapper = document.createElement("div");
            wrapper.className = "code-block-wrapper";

            // insert wrapper before <pre>, move <pre> inside it
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            // create button
            const button = document.createElement("button");
            button.className = "copy-code-button";
            button.type = "button";
            button.textContent = "Copy";

            // append button to wrapper
            wrapper.appendChild(button);
        });

        return "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
    }

    return content;
}