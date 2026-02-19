export default {
    category: (data) => {
        // src/[category]/[post]
        const fp = data.page.filePathStem;
        const parts = fp.split('/');
        if (parts.length !== 2) return "";
        return parts[1];
    },
}