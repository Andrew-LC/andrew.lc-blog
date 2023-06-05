import Fuse from 'fuse.js'

interface metaData {
  slug: string;
  content: string;
  title: string;
  date: string,
  tags?: string
}

export function search(keyword: string, data: metaData[]) {
  //@ts-ignore
  const options = {
    includeScore: true,
    keys: ['title']
  }
  if (!data) {
    return "error!"
  }
  const fuse = new Fuse(data, options)
  const result = fuse.search(keyword)
  return result
}
