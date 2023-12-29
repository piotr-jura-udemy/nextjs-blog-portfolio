import { notFound } from 'next/navigation'

export default function BlogPage({ params }) {
  if (!['first', 'second'].includes(params.slug)) {
    notFound()
  }

  return (<>Hello! {params.slug}</>)
}