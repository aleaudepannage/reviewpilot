import { ArrowRight, Star, TrendingUp } from "lucide-react"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const cases = [
  {
    business: "Restaurant gastronomique",
    location: "Lyon 2e",
    avatar: "JP",
    before: { note: "3.2", reviews: "47 avis" },
    after: { note: "4.7", reviews: "230 avis" },
    result: "+40% de reservations",
    duration: "3 mois",
    quote: "Notre chiffre d\u2019affaires du midi a augmente de 40% depuis que notre note a depasse 4.5 sur Google.",
    name: "Jean-Pierre M.",
    role: "Proprietaire",
  },
  {
    business: "Hotel boutique",
    location: "Paris Marais",
    avatar: "CD",
    before: { note: "3.8", reviews: "120 avis" },
    after: { note: "4.6", reviews: "380 avis" },
    result: "+55% de reservations directes",
    duration: "4 mois",
    quote: "On passait 2h par jour a gerer les avis. Aujourd\u2019hui 10 minutes suffisent et notre note a gagne 0.8 point.",
    name: "Claire D.",
    role: "Directrice",
  },
  {
    business: "Cabinet dentaire",
    location: "Bordeaux Centre",
    avatar: "ML",
    before: { note: "3.5", reviews: "25 avis" },
    after: { note: "4.8", reviews: "140 avis" },
    result: "+30 patients / mois",
    duration: "2 mois",
    quote: "12 faux avis contestes et retires en 48h. Mes patients sont revenus et ma liste d\u2019attente s\u2019est allongee.",
    name: "Dr. Marc L.",
    role: "Chirurgien-dentiste",
  },
]

export function CaseStudies() {
  return (
    <section id="testimonials" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Etudes de cas
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Des resultats "}
            <span className="font-serif italic text-accent">mesurables</span>
            {", pas des promesses"}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Voici ce qui change réellement pour nos clients"}
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.name} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-accent/20 hover:shadow-xl hover:shadow-accent/[0.04]">
              {/* Header */}
              <div className="px-8 pt-8 pb-6">
                <div>
                  <p className="text-base font-bold text-foreground">{c.business}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.location}</p>
                </div>
              </div>

              {/* Before / After -- visual */}
              <div className="mx-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-border">
                <div className="flex flex-col items-center bg-muted/50 px-4 py-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-destructive">Avant</span>
                  <div className="mt-3 flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-muted-foreground/20 text-muted-foreground/20" />
                    <span className="text-3xl font-bold text-foreground">{c.before.note}</span>
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">{c.before.reviews}</span>
                </div>
                <div className="flex flex-col items-center bg-accent/[0.04] px-4 py-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Apres</span>
                  <div className="mt-3 flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-3xl font-bold text-foreground">{c.after.note}</span>
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">{c.after.reviews}</span>
                </div>
              </div>

              {/* Impact */}
              <div className="mx-8 mt-4 flex items-center justify-center gap-2 rounded-2xl bg-accent/[0.06] px-4 py-3.5">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-sm font-bold text-accent">{c.result}</span>
              </div>

              {/* Quote */}
              <div className="flex flex-1 flex-col justify-between px-8 pt-6 pb-8">
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  {`\u201C${c.quote}\u201D`}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                    {c.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <NeomorphCTA href="#pricing">
            {"Commencer maintenant"}
          </NeomorphCTA>
        </div>
      </div>
    </section>
  )
}
