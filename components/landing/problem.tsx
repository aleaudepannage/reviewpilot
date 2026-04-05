import { XCircle, ArrowRight } from "lucide-react"

const problems = [
  {
    emoji: "📍",
    title: "Vous n'apparaissez pas dans le \"Pack 3\" Google",
    desc: "Les 3 premières fiches captent 70% des clics. Si vous n'y êtes pas, vos concurrents raflent vos clients.",
  },
  {
    emoji: "📸",
    title: "Votre fiche est incomplète ou mal renseignée",
    desc: "Une fiche sans photos, sans description optimisée ou avec des horaires faux fait fuir les prospects — et pénalise votre classement.",
  },
  {
    emoji: "⭐",
    title: "Pas assez d'avis, ou des avis sans réponse",
    desc: "Google favorise les fiches actives. Sans avis réguliers et réponses, votre position chute semaine après semaine.",
  },
  {
    emoji: "🗺️",
    title: "Vos concurrents ont investi leur GMB — pas vous",
    desc: "Pendant que vous lisez ces lignes, ils publient des posts, collectent des avis et grimpent dans les résultats locaux.",
  },
]

export function Problem() {
  return (
    <section className="py-24 md:py-36 bg-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Le problème
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-background md:text-5xl text-balance">
            Pourquoi vous{" "}
            <span className="font-serif italic text-accent">perdez des clients</span>
            {" "}chaque jour
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/50 md:text-lg">
            Une fiche Google My Business non optimisée, c'est de l'argent laissé sur la table — chaque jour.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-accent/30 hover:bg-white/8"
            >
              <span className="text-3xl shrink-0">{p.emoji}</span>
              <div>
                <h3 className="text-base font-bold text-background leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/50">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-5 py-2.5">
            <ArrowRight className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              La bonne nouvelle : ça se corrige en quelques semaines
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
