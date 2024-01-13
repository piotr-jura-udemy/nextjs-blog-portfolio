import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

export function loadPost(slug) {
  const filename = slug.endsWith('.mdx') ? slug : `${slug}.mdx`

  return fs.readFileSync(
    path.join(process.cwd(), 'content', filename)
  )
}

export async function getPost(slug) {
  const source = loadPost(slug)

  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true
    }
  })
}