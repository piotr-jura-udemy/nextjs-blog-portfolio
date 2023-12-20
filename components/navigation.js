import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="font-mono">
      <ul className="flex md:space-x-4 flex-col md:flex-row">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/projects">Projects</Link></li>
      </ul>
    </nav>
  )
}