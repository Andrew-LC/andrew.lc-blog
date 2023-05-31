import fs from 'fs';
import { join } from 'path';
import orgToHtml from './orgToHtml';

interface metaData {
  slug: string;
  content: string;
  title: string;
  date: string,
  tags?: string
}

const postDir = join(process.cwd(), '_posts');
const featuredDir = join(process.cwd(), 'posts/featured');

export function getPostSlugs() {
  return fs.readdirSync(postDir);
}

export function getFeaturedSlugs() {
  return fs.readdirSync(featuredDir);
}

export function getPostBySlug(slug: string, fields: Partial<metaData[]> = []): Partial<metaData> {
  const realSlug = slug.replace(/\.org$/, '');
  const fullPath = join(postDir, `${realSlug}.org`);
  const content = fs.readFileSync(fullPath, 'utf8');
  const org = orgToHtml(content);

  let items: Partial<metaData> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (String(field) === 'slug') {
      items[String(field) as keyof metaData] = realSlug;
    }
    if (String(field) === 'content') {
      items[String(field) as keyof metaData] = String(org);
    }
    if (org.data[String(field)]) {
      items[String(field) as keyof metaData] = org.data[String(field) as keyof metaData];
    }
  });

  return items as Partial<metaData>;
}




export function getAllPosts(fields: Partial<metaData[]>): Partial<metaData[]> {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1));
  return posts as metaData[];
}

export function getAllFeatured(fields: Partial<metaData[]>): Partial<metaData[]> {
  const posts = getAllPosts(fields);
  const featured = posts.filter((post) => post!.tags == "Featured");
  return featured as Partial<metaData[]>;
}

