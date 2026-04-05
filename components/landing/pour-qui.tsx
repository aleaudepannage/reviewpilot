const sectors = [
  { emoji: "🔧", label: "Plombiers" },
  { emoji: "🏗️", label: "Maçons" },
  { emoji: "🪚", label: "Charpentiers" },
  { emoji: "🏠", label: "Couvreurs" },
  { emoji: "🪟", label: "Menuisiers" },
  { emoji: "🖌️", label: "Peintres" },
  { emoji: "💇", label: "Coiffeurs & esthétiques" },
  { emoji: "🏢", label: "Agences immobilières" },
  { emoji: "🦷", label: "Cabinets médicaux" },
  { emoji: "🚗", label: "Garages & carrossiers" },
  { emoji: "⚡", label: "Électriciens & chauffagistes" },
  { emoji: "📦", label: "Commerces de proximité" },
]

export function PourQui() {
  return (
    <section className="py-24 md:py-36 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Pour qui ?
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Tout commerce local qui veut{" "}
            <span className="font-serif italic text-accent">plus de clients</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Si vos clients vous cherchent sur Google avant de vous appeler, Next Level GMB est fait pour vous.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {sectors.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-5 text-center transition-all hover:border-accent/25 hover:bg-accent/[0.02] hover:shadow-md"
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-xs font-semibold text-foreground leading-tight">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Common point */}
        <div className="mt-12 mx-auto max-w-2xl rounded-3xl border border-accent/15 bg-accent/[0.03] p-8 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-bold text-foreground">Un seul point commun :</span> vous avez une zone de chalandise locale
            et vos clients potentiels cherchent vos services sur Google Maps avant de vous contacter.
            C'est là qu'on intervient.
          </p>
        </div>

      </div>
    </section>
  )
}
