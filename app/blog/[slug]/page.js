import { notFound } from 'next/navigation'
import { getPost } from '@/lib/posts'

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