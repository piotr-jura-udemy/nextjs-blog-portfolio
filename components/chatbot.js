'use client'
import Script from 'next/script'

export default function Chatbot() {
  return (<>
    <Script src="/chatbot.js" strategy="lazyOnload" onLoad={() => initializeChatbot()} />
  </>)
}