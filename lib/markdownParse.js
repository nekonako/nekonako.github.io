import html from 'remark-html'
import highlight from 'remark-prism'
import unified from 'unified'
import markdown from 'remark-parse'
import matter from 'gray-matter'

export default async function markdownParse(context) {
   const result = await unified()
   .use(markdown)
   .use(highlight)
   .use(html)
   .process(context);
   return result.toString()
}
