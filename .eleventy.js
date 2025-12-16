export default async function (config) {
    config.addGlobalData('layout', 'layouts/base.njk');
    
    config.addShortcode("a", function (url, text) {
        const metadata = 'class="ext-link" target="_blank" rel="noopener noreferrer"';
        return `<a ${metadata} href="${url}">${text}<span>&nearrow;</span></a>`;
    });

    config.setServerOptions({
        port: 2025,
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "_site",
        }
    };
}