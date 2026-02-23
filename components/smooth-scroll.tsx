"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Enhanced smooth scroll for CTA links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      
      if (link) {
        const href = link.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            // Calculate offset to center the section
            const headerHeight = 80 // Approximate header height
            const windowHeight = window.innerHeight
            const elementHeight = targetElement.offsetHeight
            
            // Calculate position to center the element
            let scrollPosition = targetElement.offsetTop - headerHeight
            
            // If element is smaller than viewport, center it vertically
            if (elementHeight < windowHeight - headerHeight) {
              scrollPosition = targetElement.offsetTop - (windowHeight - elementHeight) / 2
            }
            
            window.scrollTo({
              top: Math.max(0, scrollPosition),
              behavior: 'smooth'
            })
          }
        }
      }
    }
    
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  
  return null
}
