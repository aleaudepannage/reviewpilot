import { MapPin, Star, Search, BarChart3, CheckCircle2 } from "lucide-react"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const services = [
  {
    icon: MapPin,
    tag: "Fiche GMB",
    title: "Une fiche Google My Business qui convertit vraiment",
    stat: "3x",
    statLabel: "plus de clics en moyenne",
    description:
      "Photos, description, catégories, attributs, Q&A, produits/services : on optimise chaque élément de votre fiche pour que Google vous affiche en premier sur les recherches locales.",
    bullets: [
      "Optimisation complète de tous les champs de la fiche",
      "Photos professionnelles et mises à jour régulières",
      "Posts GMB hebdomadaires pour booster la visibilité",
    ],
  },
  {
    icon: Star,
    tag: "Avis clients",
    title: "Plus d'avis 5★, répondus en moins de 24h",
    stat: "4.7/5",
    statLabel: "note moyenne atteinte",
    description:
      "On met en place un système automatisé pour collecter des avis après chaque prestation, et on rédige des réponses professionnelles à chaque commentaire — positif ou négatif.",
    bullets: [
      "Campagnes de collecte d'avis post-visite automatisées",
      "Réponses personnalisées à 100% des avis",
      "Gestion et contestation des avis injustes",
    ],
  },
  {
    icon: Search,
    tag: "SEO local",
    title: "Apparaître en tête des recherches dans votre zone",
    stat: "#1",
    statLabel: "sur Google Maps",
    description:
      "Cohérence NAP sur 50+ annuaires, backlinks locaux, optimisation des mots-clés de proximité : on construit votre autorité locale pour que Google vous positionne devant vos concurrents.",
    bullets: [
      "Audit et correction des citations locales (NAP)",
      "Référencement sur les 50+ annuaires clés",
      "Stratégie de mots-clés locaux ciblée",
    ],
  },
  {
    icon: BarChart3,
    tag: "Reporting",
    title: "Des chiffres concrets, pas des promesses",
    stat: "100%",
    statLabel: "transparent",
    description:
      "Tableau de bord mensuel avec vos positions sur Google Maps, nombre de vues sur votre fiche, appels générés, demandes d'itinéraire — l'impact business mesuré.",
    bullets: [
      "Dashboard en temps réel accessible 24h/24",
      "Rapport mensuel avec évolution des positions",
      "Suivi du ROI : appels, visites, demandes d'itinéraire",
    ],
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nos services
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Quatre leviers pour "}
            <span className="font-serif italic text-accent">dominer Google Maps</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Une approche complète et clé en main — vous vous concentrez sur votre métier, on gère votre visibilité locale.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-20 space-y-8">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group grid items-center gap-12 rounded-3xl border border-border bg-card p-8 transition-all hover:border-accent/20 hover:shadow-xl hover:shadow-accent/[0.04] md:grid-cols-5 md:p-14"
            >
              {/* Content */}
              <div className={`md:col-span-3 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10">
                    <s.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{s.tag}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
                  {s.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-lg">
                  {s.description}
                </p>
                <ul className="mt-7 space-y-3.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm font-medium text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat block */}
              <div className={`flex items-center justify-center md:col-span-2 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex flex-col items-center rounded-3xl border border-dashed border-accent/20 bg-accent/[0.03] px-14 py-12">
                  <span className="text-6xl font-bold tracking-tight text-accent md:text-7xl">{s.stat}</span>
                  <span className="mt-3 text-sm font-medium text-muted-foreground text-center">{s.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <NeomorphCTA href="#pricing">
            Optimiser ma fiche GMB
          </NeomorphCTA>
        </div>
      </div>
    </section>
  )
}
