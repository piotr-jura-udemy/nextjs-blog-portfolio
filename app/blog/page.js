import { getPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function BlogPostsPage(
  { searchParams }
) {
  console.log(searchParams.tags)
  const tags = searchParams.tags?.split(',')
  console.log(tags)
  const posts = await getPosts({
    tags
  })
  return (
    <>
      <h1 className="mb-8 text-xl">Recent Posts</h1>

      <div className="text-lg text-gray-600 dark:text-gray-400 mb-8">Stay up to date with most recent posts</div>

      <hr />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{post.frontmatter.title}</Link>
            <div className="text-gray-400 text-sm mt-2">{post.frontmatter.date}</div>
          </li>
        ))}
      </ul>
    </>
  )
}