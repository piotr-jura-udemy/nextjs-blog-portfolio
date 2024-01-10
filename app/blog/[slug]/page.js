import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'

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
    markdown = fs.readFileSync(
      path.join(process.cwd(), 'content', `${params.slug}.mdx`)
    )
  } catch (e) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={markdown} />
    </article>
  )
}