import { Star, ShieldCheck, MessageSquareText, CheckCircle2 } from "lucide-react"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const services = [
  {
    icon: Star,
    tag: "Collecte",
    title: "Vos clients satisfaits deviennent vos ambassadeurs",
    stat: "35%",
    statLabel: "de taux de conversion",
    description: "Apres chaque visite, on invite automatiquement vos clients a laisser un avis. SMS, email, QR code : la bonne methode au bon moment.",
    bullets: [
      "Invitations automatiques post-visite",
      "Lien direct Google, TripAdvisor, Trustpilot",
      "QR code personnalise pour votre comptoir",
    ],
  },
  {
    icon: ShieldCheck,
    tag: "Protection",
    title: "Les avis injustes n'ont plus le dernier mot",
    stat: "85%",
    statLabel: "de taux de retrait",
    description: "Faux avis, diffamation, conflit d'interet : nos experts identifient et contestent chaque avis non conforme aux CGU des plateformes.",
    bullets: [
      "Analyse juridique de chaque avis signale",
      "Contestation formelle aupres des plateformes",
      "Suivi du dossier jusqu'a resolution complete",
    ],
  },
  {
    icon: MessageSquareText,
    tag: "Reponses",
    title: "Chaque avis recoit une reponse pro en moins de 15 minutes",
    stat: "<15min",
    statLabel: "de temps de reponse",
    description: "Reponses professionnelles calibrees sur votre ton de marque. Mode automatique ou validation manuelle, vous choisissez.",
    bullets: [
      "Reponses adaptees a votre image de marque",
      "Mode auto ou validation avant publication",
      "Google, Facebook, TripAdvisor couverts",
    ],
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nos expertises
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Trois leviers pour reprendre "}
            <span className="font-serif italic text-accent">{"la maîtrise de votre réputation"}</span>
          </h2>
        </div>

        {/* Service cards -- more whitespace, clearer hierarchy */}
        <div className="mt-24 space-y-8">
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
                  <span className="mt-3 text-sm font-medium text-muted-foreground">{s.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <NeomorphCTA href="#pricing">
            {"Booster ma réputation"}
          </NeomorphCTA>
        </div>
      </div>
    </section>
  )
}
