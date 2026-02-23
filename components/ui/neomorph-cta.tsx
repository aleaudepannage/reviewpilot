"use client"

import { ArrowRight } from "lucide-react"

interface NeomorphCTAProps {
  href: string
  children: React.ReactNode
  showArrow?: boolean
}

export function NeomorphCTA({ href, children, showArrow = true }: NeomorphCTAProps) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center h-[3.5rem] px-10 text-base font-semibold rounded-2xl bg-accent text-accent-foreground uppercase transition-all duration-150 ease-in-out cursor-pointer select-none overflow-hidden"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.5) 0.33rem 0.33rem 0.6rem, inset rgba(255, 255, 255, 0.5) -0.33rem -0.33rem 0.6rem',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.5) 0 0 0, inset rgba(255, 255, 255, 0.5) 0 0 0'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.5) 0.33rem 0.33rem 0.6rem, inset rgba(255, 255, 255, 0.5) -0.33rem -0.33rem 0.6rem'
      }}
    >
      <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-y-[0.15rem]">
        {children}
      </span>
      {showArrow && (
        <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-y-[0.15rem]" />
      )}
    </a>
  )
}
