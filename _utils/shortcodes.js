const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

// helper to remove leading indentation from a multi-line string
const dedent = (str) => {
    const lines = str.split('\n');
    const firstContentLine = lines.find(line => line.trim().length > 0);
    if (!firstContentLine) return str;

    const indent = firstContentLine.match(/^\s*/)[0];
    return lines
        .map(line => line.startsWith(indent) ? line.substring(indent.length) : line)
        .join('\n')
        .trim();
};

const shortcodes = {
    tabsContainer: function(content, labelsStr) {
        const labels = labelsStr.split(',').map(l => l.trim());
        const tabList = labels.map(label => {
            const id = slugify(label);
            return `<li><a href="#${id}" role="tab">${label}</a></li>`;
        }).join('');

        return `
    <seven-minute-tabs autoheight>
        <ol role="tablist" aria-label="Code options">
            ${tabList}
        </ol>
        ${content}
    </seven-minute-tabs>`;
    },

    tabWrapper: function(content, label) {
        const id = slugify(label);
        const cleaned = dedent(content);
        return `<div id="${id}" role="tabpanel">${cleaned}</div>`;
    }
};

export default shortcodes;