"use client"

import { useRef, useState, useEffect, RefObject } from "react"

export function useScrollAnimation<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { ref, isVisible } as { ref: RefObject<T>, isVisible: boolean }
}
