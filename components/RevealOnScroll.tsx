/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import type React from "react"
import { useEffect, useRef, type ReactNode } from "react"

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export default RevealOnScroll

