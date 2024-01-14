import { notFound } from 'next/navigation'
import { getPost as getPostNotCached } from '@/lib/posts'
import { cache } from 'react'

const getPost = cache(
  async (slug) => await getPostNotCached(slug)
)

export async function generateMetadata({ params }, parent) {
  try {
    const { frontmatter } = await getPost(params.slug)
    return frontmatter
  } catch (e) { }
}

export default async function BlogPage({ params }) {
  let post

  try {
    post = await getPost(params.slug)
  } catch (e) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert">
      {post.content}
    </article>
  )
}