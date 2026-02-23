"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Expertises", href: "#features" },
  { label: "Methode", href: "#how-it-works" },
  { label: "Resultats", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/logo.svg" 
            alt="ReviewPilot" 
            className="h-8 w-8 md:h-9 md:w-9 transition-transform hover:scale-105"
          />
          <span className="text-base md:text-lg font-bold tracking-tight text-foreground">
            Review<span className="font-serif italic text-accent">Pilot</span>
          </span>
        </a>

        {/* Desktop links - minimal, fewer distractions */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA - Always visible on all devices */}
        <div className="flex items-center">
          {/* Mobile CTA - Icon only */}
          <a
            href="#pricing"
            className="md:hidden relative inline-flex items-center justify-center px-3 py-2 rounded-xl bg-accent text-accent-foreground font-semibold transition-all duration-300 hover:bg-accent/90"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-xl p-[2px] shine-border-mask">
              <div className="shine-border-glow"></div>
            </div>
            <span className="sr-only">Analyser ma réputation</span>
            <svg 
              className="h-5 w-5 relative z-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" 
              />
            </svg>
          </a>
          
          {/* Desktop CTA - Full text */}
          <a
            href="#pricing"
            className="hidden md:flex relative items-center justify-center px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold transition-all duration-300 hover:bg-accent/90"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-xl p-[2px] shine-border-mask">
              <div className="shine-border-glow"></div>
            </div>
            <span className="relative z-10">Analyser ma réputation</span>
          </a>
        </div>
        
        <style jsx>{`
          .shine-border-mask {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 0.75rem;
            width: 100%;
            height: 100%;
            padding: 2px;
            mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            mask-composite: exclude;
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
          }
          
          .shine-border-glow {
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              rgba(255, 255, 255, 0.8) 10%,
              rgba(255, 255, 255, 0.4) 15%,
              transparent 20%
            );
            position: absolute;
            top: 50%;
            left: 50%;
            width: 500px;
            height: 500px;
            transform: translate(-50%, -50%);
            transform-origin: 0 0;
            animation: rotateShine 3s linear infinite;
          }
          
          @keyframes rotateShine {
            0% {
              transform: rotate(0deg) translate(-50%, -50%);
            }
            100% {
              transform: rotate(360deg) translate(-50%, -50%);
            }
          }
        `}</style>
      </nav>
    </header>
  )
}
