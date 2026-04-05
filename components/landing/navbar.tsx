"use client"

import { useState, useEffect } from "react"
import { MapPin, LayoutGrid, Cog, TrendingUp, HelpCircle, Phone } from "lucide-react"

const desktopLinks = [
  { label: "Services", href: "#features" },
  { label: "Méthode", href: "#how-it-works" },
  { label: "Résultats", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

const iconNavItems = [
  { label: "Services", href: "#features", Icon: LayoutGrid },
  { label: "Méthode", href: "#how-it-works", Icon: Cog },
  { label: "Résultats", href: "#testimonials", Icon: TrendingUp },
  { label: "FAQ", href: "#faq", Icon: HelpCircle },
  { label: "Contact", href: "#pricing", Icon: Phone },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = iconNavItems.map((i) => i.href.replace("#", ""))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Main header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-background/90 backdrop-blur-sm border-b border-border/30"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span className="text-base md:text-lg font-bold tracking-tight text-foreground">
              Next Level <span className="font-serif italic text-accent">GMB</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {desktopLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 md:px-6 md:py-3"
          >
            <span className="hidden sm:inline">Audit gratuit</span>
            <span className="sm:hidden">Audit</span>
          </a>
        </div>

        {/* Icon nav bar — mobile only, sits directly below the main header */}
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex items-stretch">
            {iconNavItems.map(({ label, href, Icon }) => {
              const isActive = activeSection === href.replace("#", "")
              return (
                <a
                  key={label}
                  href={href}
                  className={`relative flex flex-1 flex-col items-center justify-center gap-1 py-2.5 transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-accent" />
                  )}
                  <Icon className="h-5 w-5" />
                  <span className="text-[10px] font-semibold tracking-tight">{label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </header>
    </>
  )
}
