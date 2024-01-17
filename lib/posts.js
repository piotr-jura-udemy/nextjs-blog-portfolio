import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import H1 from '@/components/h1'

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
    components: {
      h1: (props) => <H1 {...props} />
    },
    options: {
      parseFrontmatter: true
    }
  })
}

export async function getPosts({
  newest = true, page = 1, limit = 3, tags
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

  const startIndex = (page - 1) * limit // 0
  const endIndex = page * limit // 10

  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    pageCount: Math.ceil(filteredPosts.length / limit)
  }
}