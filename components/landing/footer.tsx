import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

const navLinks = [
  { label: "Nos services", href: "#features" },
  { label: "Notre méthode", href: "#how-it-works" },
  { label: "Résultats clients", href: "#testimonials" },
  { label: "Pour qui ?", href: "#pour-qui" },
  { label: "FAQ", href: "#faq" },
]


export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-background">
                Next Level <span className="font-serif italic text-accent">GMB</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/50">
              L'agence spécialisée en optimisation Google My Business pour les artisans, commerçants et professions libérales qui veulent passer devant leurs concurrents.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+33600000000" className="inline-flex items-center gap-2.5 text-sm text-background/60 transition-colors hover:text-accent">
                <Phone className="h-4 w-4 text-accent" />
                06 00 00 00 00
              </a>
              <a href="mailto:contact@nextlevelgmb.fr" className="inline-flex items-center gap-2.5 text-sm text-background/60 transition-colors hover:text-accent">
                <Mail className="h-4 w-4 text-accent" />
                contact@nextlevelgmb.fr
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-background/50 transition-colors hover:border-accent/40 hover:text-accent">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-background/50 transition-colors hover:border-accent/40 hover:text-accent">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-background/40">Navigation</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-background/60 transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 md:flex-row">
          <p className="text-xs text-background/40">
            Made by Next Level Agency 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
