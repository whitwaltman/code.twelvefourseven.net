// import utils from `astro:content`
import { defineCollection, z } from 'astro:content';

// import loader(s)
// import { glob, file } from 'astro/loaders';
import { glob } from 'astro/loaders';

// define collections
const notesCollection = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/notes" }),
    schema: z.object({
        title: z.string(),
        created: z.coerce.date(),
        updated: z.coerce.date().optional(),
        tags: z.array(z.string()),
    }),
});

// const glossary = defineCollection({
//     loader: file("src/data/glossary.json"),
// });

const snippetsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/snippets" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    notes: notesCollection, 
    snippets: snippetsCollection,
};