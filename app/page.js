'use client'

import { useState } from "react"

function Card({ children }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      {children}
    </div>
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)
  const name = 'Piotr'
  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  const cards = isVisible && <><Card>This is being passed from the parent</Card>
    <Card>
      <div>This is JS!</div>
      <Card>Nested text!</Card>
    </Card>
    <Card />
    <Card />
    <Card /></>
  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        {cards}
        <button onClick={handleClick}>
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
    </>
  )
}
