import { useEffect, useState } from 'react'

// Cycles through a list of phrases. Shows the first one right away and
// stays on it for people who prefer reduced motion.
export function useRotate(items, ms = 3200) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), ms)
    return () => clearInterval(timer)
  }, [items, ms])

  return [items[index], index]
}
