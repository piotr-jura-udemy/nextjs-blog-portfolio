import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { loadPost } from '@/lib/posts'

const titles = {
  'first': 'Hello First!',
  'second': 'Hello Second!'
}

export async function generateMetadata({ params }, parent) {
  const description = (await parent).description ?? 'Default desc'

  return {
    title: titles[params.slug],
    description
  }
}

export default function BlogPage({ params }) {
  // if (!['first', 'second'].includes(params.slug)) {
  //   notFound()
  // }

  let markdown

  try {
    markdown = loadPost(params.slug)
  } catch (e) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={markdown} />
    </article>
  )
}