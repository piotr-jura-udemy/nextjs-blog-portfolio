import { getPost } from '@/lib/posts'
import fs from 'fs'
import path from 'path'

export default async function BlogPostsPage() {
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

  console.log(posts)

  return (
    <>
      <h1>Recent Posts</h1>
    </>
  )
}