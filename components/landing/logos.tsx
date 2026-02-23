const logos = [
  { name: "Google Business", color: "#4285F4" },
  { name: "TripAdvisor", color: "#00AF87" },
  { name: "Trustpilot", color: "#00B67A" },
  { name: "Facebook", color: "#1877F2" },
  { name: "Booking.com", color: "#003580" },
  { name: "Pages Jaunes", color: "#FFD500" },
  { name: "Yelp", color: "#D32323" },
]

export function Logos() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {"Plateformes couvertes"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo.name}
                className="text-sm font-bold tracking-tight transition-colors hover:opacity-80"
                style={{ color: logo.color }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
