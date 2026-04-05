import { Search, MapPin, Star, TrendingUp } from "lucide-react"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const deliverables = [
  {
    icon: Search,
    title: "Audit de votre fiche actuelle",
    desc: "On passe en revue chaque élément : complétude, photos, catégories, attributs, Q&A. On score votre fiche sur 100.",
    color: "66, 133, 244",
  },
  {
    icon: MapPin,
    title: "Benchmark de vos concurrents",
    desc: "On analyse les 3 fiches qui vous devancent sur Google Maps et on identifie exactement pourquoi elles sont mieux positionnées.",
    color: "52, 168, 83",
  },
  {
    icon: Star,
    title: "Stratégie avis personnalisée",
    desc: "On évalue votre note, le volume d'avis et leur fraîcheur pour définir la stratégie de collecte la plus efficace pour votre secteur.",
    color: "251, 188, 4",
  },
  {
    icon: TrendingUp,
    title: "Plan d'action chiffré",
    desc: "Gain de positions estimé, délai réaliste, actions prioritaires classées par impact. Vous repartez avec une feuille de route claire.",
    color: "234, 67, 53",
  },
]

export function AuditValue() {
  return (
    <section className="py-24 md:py-36 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Votre audit gratuit
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Ce que vous obtenez "}
            <span className="font-serif italic text-accent">gratuitement</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Un diagnostic complet de votre visibilité Google locale — livré sous 48h.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="group relative flex gap-5 rounded-3xl bg-card p-8 transition-all duration-300"
              style={{
                border: `3px solid rgba(${d.color}, 0.25)`,
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `rgba(${d.color}, 0.1)` }}
              >
                <d.icon className="h-5 w-5" style={{ color: `rgb(${d.color})` }} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
              <div
                className="absolute -inset-[3px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `0 0 30px rgba(${d.color}, 0.4), 0 0 60px rgba(${d.color}, 0.2)`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <NeomorphCTA href="#pricing">
            Recevoir mon audit gratuit
          </NeomorphCTA>
        </div>
      </div>
    </section>
  )
}
