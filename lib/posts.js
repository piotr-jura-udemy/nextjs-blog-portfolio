import fs from 'fs'
import path from 'path'

export function loadPost(slug) {
  return fs.readFileSync(
    path.join(process.cwd(), 'content', `${slug}.mdx`)
  )
}