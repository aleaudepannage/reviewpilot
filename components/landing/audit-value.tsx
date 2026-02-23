"use client"

import { Search, AlertTriangle, Lightbulb, BarChart3 } from "lucide-react"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const deliverables = [
  {
    icon: Search,
    title: "Analyse complete de votre note",
    desc: "Etat des lieux sur Google, TripAdvisor, Facebook, Trustpilot et toutes les plateformes cles de votre secteur.",
    color: "66, 133, 244", // Google Blue RGB
  },
  {
    icon: AlertTriangle,
    title: "Identification des avis contestables",
    desc: "Reperage des avis non conformes aux CGU, avec estimation du nombre de retraits possibles.",
    color: "234, 67, 53", // Google Red RGB
  },
  {
    icon: Lightbulb,
    title: "Plan d'action personnalise",
    desc: "Canaux de collecte, timing, ton de reponse, strategie adaptee a votre activite.",
    color: "251, 188, 4", // Google Yellow RGB
  },
  {
    icon: BarChart3,
    title: "Simulation d'impact business",
    desc: "Projection chiffree : note cible, clients supplementaires, impact direct sur votre CA.",
    color: "52, 168, 83", // Google Green RGB
  },
]

export function AuditValue() {
  return (
    <section className="py-32 md:py-40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Votre diagnostic
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Ce que vous découvrez pendant "}
            <span className="font-serif italic text-accent">cet échange</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Un plan clair. Des actions concrètes."}
          </p>
        </div>

        {/* 4 deliverables */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 sm:grid-cols-2">
          {deliverables.map((d) => (
            <div 
              key={d.title} 
              className="glow-card group relative flex gap-5 rounded-3xl bg-card p-8 transition-all duration-300"
              style={{
                border: `3px solid rgba(${d.color}, 0.4)`,
                boxShadow: `0 4px 6px -1px rgb(0 0 0 / 0.1)`,
              }}
            >
              <div 
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors"
                style={{
                  backgroundColor: `rgba(${d.color}, 0.1)`,
                }}
              >
                <d.icon 
                  className="h-5 w-5" 
                  style={{ color: `rgb(${d.color})` }}
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
              
              {/* Glow effect on hover */}
              <div 
                className="absolute -inset-[3px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `0 0 40px rgba(${d.color}, 0.6), 0 0 80px rgba(${d.color}, 0.4), 0 0 120px rgba(${d.color}, 0.2)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <NeomorphCTA href="#pricing">
            {"Évaluer ma réputation"}
          </NeomorphCTA>
        </div>
      </div>
    </section>
  )
}
