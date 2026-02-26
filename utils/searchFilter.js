import elasticlunr from "elasticlunr";

async function searchFilter (collection) {
    let index = elasticlunr(function () {        
        this.addField("title");
        this.addField("content");
        this.addField("tags");
        this.setRef("id");
    });

    for (const page of collection) {
        const frontMatter = await page.template.read();
        const content = page.rawInput.replace(/(<([^>]+)>)/gi, "");

        index.addDoc({
            id: page.url,
            title: frontMatter.data.title,
            content: content,
            tags: frontMatter.data.tags,
        });
    }

    return index.toJSON();
};

export default searchFilter;