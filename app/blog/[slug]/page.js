import { notFound } from 'next/navigation'
import { getPost as getPostNotCached, getPosts } from '@/lib/posts'
import { cache } from 'react'
import Link from 'next/link'

const getPost = cache(
  async (slug) => await getPostNotCached(slug)
)

export async function generateStaticParams() {
  const {posts} = await getPosts({ limit: 1000 })
  return posts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }) {
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
      <div className="flex space-x-2 mb-8">
        {post.frontmatter.tags.map(tag => <Link key={tag} href={`/blog/?tags=${tag}`} className="dark:text-gray-400 text-gray-500">#{tag}</Link>)}
      </div>
      {post.content}
    </article>
  )
}