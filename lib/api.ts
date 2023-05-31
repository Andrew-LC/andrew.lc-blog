import fs from 'fs';
import { join } from 'path';
import orgToHtml from './orgToHtml';

interface metaData {
  slug: string | undefined;
  content: string | undefined;
  title: string;
  date: string;
}

const postDir = join(process.cwd(), '_posts');
const featuredDir = join(process.cwd(), 'posts/featured');

export function getPostSlugs() {
  return fs.readdirSync(postDir);
}

export function getFeaturedSlugs() {
  return fs.readdirSync(featuredDir);
}

export function getPostBySlug(slug: string, fields: string[] = []): metaData {
  const realSlug = slug.replace(/\.org$/, '');
  const fullPath = join(postDir, `${realSlug}.org`);
  const content = fs.readFileSync(fullPath, 'utf8');
  const org = orgToHtml(content);

  let items: Partial<metaData> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = String(org);
    }
    if (org.data[field]) {
      items[field] = org.data[field];
    }
  });

  return items as metaData;
}



export function getAllPosts(fields: any[]) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllFeatured(fields: any[]) {
  const posts = getAllPosts(fields);
  const featured = posts.filter((post) => post.tags == "Featured");
  console.log(featured)
  return featured;
}

