const single = {
    kbd: (key) => `<kbd>${key}</kbd>`,

    tmuxPrefix: () => {
        const k = ["Ctrl", "a"];
        return `<kbd>${k[0]}</kbd>-<kbd>${k[1]}</kbd>`;
    }
};

const paired = {
    note: (content) => `
        <span class="note-container" role="button" tabindex="0"
            aria-expanded="false" aria-label="Toggle note">
            <span class="note">${content}</span></span>
    `
};

export default { single, paired };