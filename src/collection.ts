import { getCollection } from "astro:content";

export const workshops = (await getCollection("workshops"))
    .filter(x => !x.data.hidden);

export const blog = (await getCollection("blog"))
    .filter(x => !x.data.hidden);