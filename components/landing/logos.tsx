const platforms = [
  { name: "Google Maps", color: "#4285F4" },
  { name: "Google Business", color: "#34A853" },
  { name: "TripAdvisor", color: "#00AF87" },
  { name: "Facebook", color: "#1877F2" },
  { name: "Pages Jaunes", color: "#FFD500" },
  { name: "Yelp", color: "#D32323" },
  { name: "Booking.com", color: "#003580" },
]

export function Logos() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Plateformes optimisées
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="text-sm font-bold tracking-tight transition-opacity hover:opacity-70"
                style={{ color: p.color }}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
