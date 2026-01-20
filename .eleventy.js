export default async function (config) {
    config.addGlobalData('layout', 'base.njk');
    config.addPassthroughCopy('assets');

    config.setServerOptions({
        port: 2026,
    });

    return {
        dir: {
            input: '.',
            includes: '_includes',
            data: '_data',
            output: '_site',
        }
    };
}