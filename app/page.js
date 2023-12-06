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
  const [label, setLabel] = useState('Show')
  const name = 'Piotr'
  const handleClick = () => {
    setLabel(label == 'Show' ? 'Hide' : 'Show')
  }
  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        <Card>This is being passed from the parent</Card>
        <Card>
          <div>This is JS!</div>
          <Card>Nested text!</Card>
        </Card>
        <Card />
        <Card />
        <Card />

        <button onClick={handleClick}>{label}</button>
      </div>
    </>
  )
}
