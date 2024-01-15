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

export async function getPosts({
  newest = true, page = 1, limit = 10, tags
} = {}) {
  const files = fs.readdirSync(
    path.join(
      process.cwd(), 'content'
    )
  )

  const posts = await Promise.all(
    files.map(async filename => {
      const { frontmatter } = await getPost(filename)

      return {
        frontmatter,
        slug: filename.replace('.mdx', '')
      }
    })
  )

  let filteredPosts = posts

  if (tags) {
    filteredPosts = filteredPosts.filter(
      post => post.frontmatter.tags.some(
        tag => tags.includes(tag)
      )
    )
  }

  if (newest) {
    // by the newest
    filteredPosts.sort(
      (a, b) => {
        const dateA = new Date(a.frontmatter.date)
        const dateB = new Date(b.frontmatter.date)
        return dateB - dateA
      }
    )
  } else {
    filteredPosts.sort(
      (a, b) => {
        const dateA = new Date(a.frontmatter.date)
        const dateB = new Date(b.frontmatter.date)
        return dateA - dateB
      }
    )
  }

  return filteredPosts
}