"use client"

import { ArrowRight, MapPin, Star, TrendingUp, Users } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function AnimatedNumber({ end, prefix, suffix }: { end: number; prefix: string; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const startTime = Date.now()
          const step = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setValue(eased * end)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  const display = end < 10 ? value.toFixed(1) : Math.round(value).toString()
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  )
}

const pillars = [
  { icon: MapPin, text: "Fiche GMB optimisée" },
  { icon: Star, text: "Avis clients stratégiques" },
  { icon: TrendingUp, text: "Position #1 sur Google Maps" },
]

const metrics = [
  { end: 30, prefix: "+", suffix: "%", label: "De visibilité locale en moyenne" },
  { end: 2.3, prefix: "x", suffix: "", label: "Plus de clics vers votre site" },
  { end: 70, prefix: "", suffix: "+", label: "TPE/PME accompagnées" },
  { end: 21, prefix: "", suffix: "j", label: "Pour voir les premiers résultats" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 lg:pt-44 lg:pb-32">
      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Blue glow top */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #4285F4 0%, transparent 70%)" }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-xs font-semibold text-accent">
            <Users className="h-3.5 w-3.5" />
            Déjà +70 TPE/PME passées devant leurs concurrents
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-6 max-w-5xl text-center text-[2rem] leading-[1.15] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-[4.25rem] text-balance">
          Passez devant vos concurrents{" "}
          <span className="font-serif italic text-accent">sur Google Maps</span>
          {" "}en 30 jours
        </h1>

        {/* Sub */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg md:mt-7">
          On optimise votre fiche Google My Business de A à Z pour que vos clients locaux vous trouvent
          avant vos concurrents — sans que vous n'ayez rien à faire.
        </p>

        {/* 3 pillars */}
        <div className="mx-auto mt-6 max-w-2xl md:mt-10">
          <div className="flex flex-col gap-2 md:hidden">
            {pillars.map((p) => (
              <div key={p.text} className="flex items-center gap-3 rounded-xl bg-accent/5 border border-accent/10 px-4 py-3">
                <p.icon className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {pillars.map((p) => (
              <div key={p.text} className="flex items-center gap-2">
                <p.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-xl shadow-accent/30 transition-all hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/35 hover:-translate-y-0.5"
          >
            Obtenir mon audit GMB gratuit
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-[11px] text-muted-foreground/70">
            Gratuit &nbsp;·&nbsp; Sans engagement &nbsp;·&nbsp; Résultats en 48h
          </p>
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-12 max-w-2xl md:mt-16">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
            <img
              src="/hero-gmb.jpg"
              alt="Fiche Google My Business optimisée"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Metrics */}
        <div className="mx-auto mt-10 max-w-4xl md:mt-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col items-center justify-center bg-card px-4 py-10 text-center">
                <span className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  <AnimatedNumber end={m.end} prefix={m.prefix} suffix={m.suffix} />
                </span>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
