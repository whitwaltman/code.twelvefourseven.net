const shortcodes = {
    kbd: function(key) {
        return `<kbd>${key}</kbd>`;
    },
    tmuxPrefix: function() {
        return `<kbd>Ctrl</kbd>-<kbd>a</kbd>`;
    },
};

export default shortcodes;