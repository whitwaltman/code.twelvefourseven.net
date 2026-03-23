const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

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
        return `<div id="${id}" role="tabpanel">${content}</div>`;
    }
};

export default shortcodes;