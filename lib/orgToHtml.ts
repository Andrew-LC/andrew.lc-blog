import { unified } from 'unified';
import html from 'rehype-stringify';

import uniorg from 'uniorg-parse';
import uniorg2rehype from 'uniorg-rehype';
import extractKeywords from 'uniorg-extract-keywords';
import highlight from 'rehype-highlight';
import katex from 'rehype-katex';

const processor = unified()
  .use(uniorg)
  .use(extractKeywords)
  .use(uniorg2rehype)
  //@ts-ignore
  .use(highlight, { ignoreMissing: true, detect: true })
  //@ts-ignore
  .use(katex)
  //@ts-ignore
  .use(html);

//@ts-ignore
export default function orgToHtml(org) {
  const result = processor.processSync(org);
  return result;
}
