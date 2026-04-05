import { Search, Cog, BarChart3 } from "lucide-react"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Audit de votre fiche",
    description:
      "On analyse votre fiche GMB actuelle, vos positions sur Google Maps, vos concurrents directs et les axes d'amélioration prioritaires. Résultats en 48h.",
    color: "#4285F4",
  },
  {
    step: "02",
    icon: Cog,
    title: "Optimisation complète",
    description:
      "On prend en main votre fiche : photos, descriptions, catégories, avis, posts, citations locales. Vous n'avez rien à faire — on s'occupe de tout.",
    color: "#34A853",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Vous grimpez, on mesure",
    description:
      "Chaque mois, vous recevez un rapport clair : positions gagnées, appels générés, visibilité en hausse. On ajuste la stratégie en continu.",
    color: "#FBBC04",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-foreground py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Notre méthode
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-background md:text-5xl text-balance">
            {"Simple comme "}
            <span className="font-serif italic text-accent">1, 2, 3</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/40 md:text-lg">
            Vous nous confiez votre visibilité Google, on livre les résultats. Zéro prise de tête.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative group"
              style={{
                "--step-color": s.color,
              } as React.CSSProperties}
            >
              <div className="p-[2px] rounded-3xl relative bg-gradient-to-br from-[var(--step-color)]/30 via-transparent to-[var(--step-color)]/30">
                <div
                  className="rounded-3xl"
                  style={{ border: `2px solid color-mix(in oklch, ${s.color} 50%, transparent)` }}
                >
                  <div
                    className="relative rounded-3xl p-8 bg-[#2e2e2e] -mt-[4px] -ml-[4px] overflow-hidden"
                    style={{ border: `2px solid ${s.color}` }}
                  >
                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none -z-10 opacity-20"
                      style={{
                        filter: "blur(32px)",
                        background: `radial-gradient(circle at 50% 0%, ${s.color}, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{ backgroundColor: `color-mix(in oklch, ${s.color} 20%, transparent)` }}
                        >
                          <s.icon className="h-5 w-5" style={{ color: s.color }} />
                        </div>
                        <span
                          className="text-4xl font-black tracking-tighter"
                          style={{ color: `color-mix(in oklch, ${s.color} 50%, transparent)` }}
                        >
                          {s.step}
                        </span>
                      </div>
                      <h3 className="mt-7 text-lg font-bold text-background">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-background/60">{s.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <NeomorphCTA href="#pricing">
            Démarrer mon optimisation
          </NeomorphCTA>
        </div>
      </div>
    </section>
  )
}
