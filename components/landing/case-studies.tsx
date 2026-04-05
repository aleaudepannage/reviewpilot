import { TrendingUp, MapPin } from "lucide-react"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const cases = [
  {
    business: "Plombier artisan",
    location: "Lyon 3e",
    avatar: "PB",
    photo: "/case-plombier.jpg",
    before: { position: "#12", label: "Position Google Maps" },
    after: { position: "#1", label: "Position Google Maps" },
    result: "+38 appels / mois",
    duration: "3 semaines",
    quote:
      "J'étais invisible sur Google Maps. En moins d'un mois, je suis passé premier sur ma zone et mon téléphone n'arrête plus de sonner.",
    name: "Pascal B.",
    role: "Artisan plombier",
  },
  {
    business: "Charpentier",
    location: "Bordeaux",
    avatar: "TM",
    photo: "/case-charpentier.jpg",
    before: { position: "#9", label: "Position Google Maps" },
    after: { position: "#1", label: "Position Google Maps" },
    result: "+10 demandes de devis / mois",
    duration: "5 semaines",
    quote:
      "Avant j'avais quasi aucune demande via Google. Aujourd'hui je refuse des chantiers faute de temps. Le résultat est impressionnant.",
    name: "Thomas M.",
    role: "Charpentier artisan",
  },
  {
    business: "Cabinet de kinésithérapie",
    location: "Bordeaux Centre",
    avatar: "SL",
    photo: "/case-kine.jpg",
    before: { position: "#8", label: "Position Google Maps" },
    after: { position: "#2", label: "Position Google Maps" },
    result: "+25 nouveaux patients / mois",
    duration: "4 semaines",
    quote:
      "Ma liste d'attente s'est allongée de 3 semaines. Les patients trouvent maintenant mon cabinet en premier sur Google.",
    name: "Sophie L.",
    role: "Kinésithérapeute",
  },
]

export function CaseStudies() {
  return (
    <section id="testimonials" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Résultats clients
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Des TPE/PME qui sont{" "}
            <span className="font-serif italic text-accent">passées devant</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Des résultats mesurables, pas des promesses marketing.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-accent/20 hover:shadow-xl hover:shadow-accent/[0.04]"
            >
              {/* Photo */}
              <div className="relative h-48 w-full overflow-hidden sm:h-56">
                <img src={c.photo} alt={c.business} className="h-full w-full object-cover object-top" />
                <div className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold text-white shadow-lg">
                  ✓ Optimisé
                </div>
              </div>

              {/* Header */}
              <div className="px-8 pt-5 pb-4 flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-base font-bold text-foreground">{c.business}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{c.location}</p>
                </div>
              </div>

              {/* Before / After */}
              <div className="mx-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-border">
                <div className="flex flex-col items-center bg-muted/50 px-4 py-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-destructive">Avant</span>
                  <span className="mt-3 text-3xl font-bold text-foreground">{c.before.position}</span>
                  <span className="mt-1 text-xs text-muted-foreground text-center">{c.before.label}</span>
                </div>
                <div className="flex flex-col items-center bg-accent/[0.04] px-4 py-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Après</span>
                  <span className="mt-3 text-3xl font-bold text-accent">{c.after.position}</span>
                  <span className="mt-1 text-xs text-muted-foreground text-center">{c.after.label}</span>
                </div>
              </div>

              {/* Impact */}
              <div className="mx-8 mt-4 flex items-center justify-between gap-2 rounded-2xl bg-accent/[0.06] px-4 py-3.5">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm font-bold text-accent">{c.result}</span>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">en {c.duration}</span>
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

        <div className="mt-20 text-center">
          <NeomorphCTA href="#pricing">
            Obtenir les mêmes résultats
          </NeomorphCTA>
        </div>
      </div>
    </section>
  )
}
