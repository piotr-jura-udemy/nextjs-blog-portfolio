import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-20 border border-yellow-400">
          Iam be visible everywhere!
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
