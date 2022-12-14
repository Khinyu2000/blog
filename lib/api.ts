import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
    const postFiles =  fs.readdirSync(postsDirectory);
    return postFiles.map(postFile => postFile.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const fullPath = join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = slug
        }

        if (field === "content") {
            items[field] = content 
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })
    return items;
}

export function getAllPosts(fields: string[]) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map(slug => 
            getPostBySlug(slug, fields)
        ).sort((post1, post2) => (post1.date > post2.date) ? -1 : 1);
    return posts;
}

