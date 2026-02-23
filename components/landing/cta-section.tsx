import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/constants"

export function CtaSection() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-14 md:p-28">
          {/* Glows */}
          <div className="pointer-events-none absolute -top-48 -right-48 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-48 -left-48 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[140px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Ne perdez plus de clients
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-background md:text-5xl lg:text-[3.5rem] text-balance leading-[1.1]">
              {"Chaque jour sans strategie, c'est "}
              <span className="font-serif italic text-accent">du CA en moins</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-background/40 md:text-lg">
              {"93% des consommateurs lisent les avis avant d'acheter. Prenez 20 minutes pour reprendre la maîtrise de votre réputation."}
            </p>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 h-[3.5rem] px-10 text-base rounded-2xl shadow-xl shadow-accent/25 font-semibold"
              >
                <a href="#pricing">
                  {"Évaluer ma réputation"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-background/10 bg-transparent text-background hover:bg-background/10 h-[3.5rem] px-8 text-base rounded-2xl font-medium"
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {"Contacter via WhatsApp"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
