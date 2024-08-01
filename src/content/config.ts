import {defineCollection, z} from "astro:content";

const modulesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional()
    })
});

const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        previewImage: z.string().optional(),
        tags: z.array(z.string()).default(['other'])
    }),
});

export const collections = {
    'modules' : modulesCollection,
    'posts' : postCollection,
};