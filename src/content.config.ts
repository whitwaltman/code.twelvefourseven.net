// import utils from `astro:content`
import { defineCollection, z } from 'astro:content';

// import loader(s)
import { glob, file } from 'astro/loaders';

// define collections
const notes = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/notes" }),
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

const snippets = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/snippets" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = { notes, snippets };