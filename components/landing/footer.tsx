export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-1">
          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2.5">
              <img 
                src="/logo.svg" 
                alt="ReviewPilot" 
                className="h-9 w-9"
              />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Review<span className="font-serif italic text-accent">Pilot</span>
              </span>
            </a>
            <p className="mt-6 mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
              {"La plateforme de gestion de reputation en ligne pour les entreprises exigeantes."}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            {"\u00A9 2026 ReviewPilot. Tous droits reserves."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["CGU", "Confidentialite", "Mentions legales", "RGPD"].map((link, index, array) => (
              <span key={link} className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  {link}
                </a>
                {index < array.length - 1 && (
                  <span className="text-xs text-muted-foreground/30">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
