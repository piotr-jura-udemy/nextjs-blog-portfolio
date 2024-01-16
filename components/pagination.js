'use client'

export default function Pagination({ pageCount }) {
  console.log(pageCount)

  const pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  console.log(pages)

  return (
    <ul className="flex justify-center space-x-4 font-mono text-lg">
      {pages.map(pageNumber => {
        return (<li key={pageNumber}>
          {pageNumber}
        </li>)
      })}
    </ul>
  )

  return (<></>)
}