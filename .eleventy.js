export default async function (config) {
    config.addGlobalData('layout', 'base.njk');

    config.addCollection('notes', function (collection) {
        return collection.getFilteredByGlob('./src/notes/*.md');
    });

    config.addCollection('posts', function (collection) {
        return collection.getFilteredByGlob('./src/posts/*.md');
    });

    config.addCollection('tagList', function (collection) {
        let tagSet = new Set();
        collection.getAll().forEach((item) => {
            ;(item.data.tags || []).forEach((tag) => tagSet.add(tag));
        });
        return [...tagSet];
    })
    
    config.addShortcode('a', function (url, text) {
        const metadata = 'class="ext-link" target="_blank" rel="noopener noreferrer"';
        return `<a ${metadata} href='${url}'>${text}<span>&nearrow;</span></a>`;
    });

    config.setServerOptions({
        port: 2025,
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: '.',
            includes: 'src/_includes',
            data: 'src/_data',
            output: '_site',
        }
    };
}