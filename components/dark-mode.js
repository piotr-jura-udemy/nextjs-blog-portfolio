'use client'

import useDarkMode from "@/hooks/use-dark-mode"

const nextModeIcons = {
  'light': '🌚',
  'dark': '🌝'
}

export default function DarkMode() {
  const { theme, toggleTheme } = useDarkMode()
  return (
    <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>
  )
}