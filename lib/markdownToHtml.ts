import { remark } from 'remark';
import html from 'remark-html';
import fs from 'node:fs/promises';
import remarkFrontmatter from 'remark-frontmatter';
import { compile } from '@mdx-js/mdx';

import remarkMdx from 'remark-mdx';

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  // const result = await remark().use(remarkMdx).process(markdown);
  console.log(markdown);
  return result.toString();
}

// import fs from 'node:fs/promises'
// import { compile } from '@mdx-js/mdx'
// import remarkGfm from 'remark-gfm'

// console.log(
//   String(
//     await compile(await fs.readFile('example.mdx'), { remarkPlugins: [remarkGfm] })
//   )
// )
