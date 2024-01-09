import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Chatbot from '@/components/chatbot'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: {
    template: '%s | Piotr Jura',
    default: 'Piotr Jura'
  },
  // description: 'Piotr Jura Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="mt-12">
          {children}
        </main>

        <Chatbot />
      </body>
    </html>
  )
}
