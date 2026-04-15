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

const paired = {
    fragment: function(content, desc) {
        const cleaned = dedent(content);
        return `<div class="fragment">
            <div class="fragment__desc">${desc}</div>
            <div class="fragment__body">${cleaned}</div>
            </div>`;
    }
};

export default { paired };