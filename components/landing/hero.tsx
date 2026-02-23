"use client"

import { ArrowRight, Star, ShieldCheck, MessageSquareText, TrendingUp } from "lucide-react"
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
  { icon: Star, text: "Collecte d'avis 5 etoiles" },
  { icon: ShieldCheck, text: "Contestation d'avis injustes" },
  { icon: MessageSquareText, text: "Reponses automatisees" },
]

const metrics = [
  { end: 4.7, prefix: "", suffix: "/5", label: "Note moyenne atteinte" },
  { end: 85, prefix: "", suffix: "%", label: "Taux de retrait d'avis injustes" },
  { end: 50, prefix: "+", suffix: "%", label: "De CA supplementaire" },
  { end: 430, prefix: "", suffix: "+", label: "Entreprises accompagnees" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-44 md:pb-32">
      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-xs font-semibold text-accent">
            <TrendingUp className="h-3.5 w-3.5" />
            {"Deja + de 430 entreprises accompagnees"}
          </div>
        </div>

        {/* Headline -- problem + benefit + result */}
        <h1 className="mx-auto mt-6 max-w-5xl text-center text-[2rem] leading-[1.15] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-[4.25rem] text-balance">
          {"Augmentez vos avis "}
          <span className="font-serif italic text-accent">{"5\u2605"}</span>
          {", neutralisez les avis injustes et multipliez "}
          <span className="font-serif italic text-accent">vos appels clients</span>
        </h1>

        {/* Sub -- business-oriented, scannable */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg md:mt-7">
          {"Votre réputation en ligne impacte directement votre croissance. Nous la gérons de A à Z pendant que vous vous concentrez sur votre métier."}
        </p>

        {/* 3 pillars -- immediate clarity - Mobile: vertical cards, Desktop: inline */}
        <div className="mx-auto mt-6 max-w-2xl md:mt-10">
          {/* Mobile: vertical cards */}
          <div className="flex flex-col gap-2 md:hidden">
            {pillars.map((p) => (
              <div key={p.text} className="flex items-center gap-3 rounded-lg bg-[#F5F5F5] px-3.5 py-2.5">
                <p.icon className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
          
          {/* Desktop: inline */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {pillars.map((p) => (
              <div key={p.text} className="flex items-center gap-2">
                <p.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA -- big, impossible to miss */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 md:mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-xl shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/30"
          >
            {"Obtenir mon audit gratuit"}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-[11px] text-muted-foreground/70">
            {"Sans engagement · Résultats en 48h"}
          </p>
        </div>

        {/* Animated metrics -- visual proof */}
        <div className="mx-auto mt-16 max-w-4xl md:mt-28">
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
