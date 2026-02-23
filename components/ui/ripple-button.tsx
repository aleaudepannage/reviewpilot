"use client"

import { useState, MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface RippleButtonProps {
  children: React.ReactNode
  href: string
  className?: string
  size?: "sm" | "md" | "lg"
}

interface Ripple {
  x: number
  y: number
  size: number
  id: number
}

export function RippleButton({ children, href, className, size = "md" }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const addRipple = (event: MouseEvent<HTMLAnchorElement>) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2
    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    }

    setRipples([...ripples, newRipple])

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id))
    }, 600)
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <a
      href={href}
      onClick={addRipple}
      className={cn(
        "relative inline-flex items-center justify-center font-semibold rounded-xl overflow-hidden",
        "bg-accent text-accent-foreground",
        "transition-all duration-300",
        "hover:shadow-lg hover:shadow-accent/30 hover:scale-105",
        "active:scale-95",
        sizeClasses[size],
        className
      )}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/40 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 600ms ease-out;
        }
      `}</style>
    </a>
  )
}
