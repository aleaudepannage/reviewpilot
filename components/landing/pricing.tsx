"use client"

import { CheckCircle2, Clock, MessageCircle, ShieldCheck } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/constants"

const included = [
  "Analyse complète de votre fiche GMB actuelle",
  "Benchmark de vos 3 concurrents principaux",
  "Liste des actions prioritaires à mener",
  "Estimation de gain de positions réaliste",
]

const stats = [
  { value: "#1", label: "Position GMB atteinte en moyenne" },
  { value: "+30%", label: "De visibilité locale" },
  { value: "70+", label: "TPE/PME accompagnées" },
  { value: "21j", label: "Pour les premiers résultats" },
]

const whatsappSvg = (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Passez à l'action
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Votre{" "}
            <span className="font-serif italic text-accent">audit GMB gratuit</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            On analyse votre fiche Google, vos positions et vos concurrents. On vous dit exactement ce qui bloque votre visibilité.
          </p>
        </div>

        <div className="mx-auto mt-20 grid items-start gap-10 lg:max-w-5xl lg:grid-cols-5">
          {/* Left */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Ce que vous recevez</p>
              <ul className="mt-6 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Nos résultats</p>
              <div className="mt-6 space-y-5">
                {stats.map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{m.label}</span>
                    <span className="text-sm font-bold text-foreground">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — WhatsApp CTA */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-xl shadow-black/5 mx-auto max-w-[600px]">
              <div className="p-8 md:p-10 flex flex-col items-center text-center gap-6">
                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Écrivez-nous sur WhatsApp</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Réponse garantie sous 2h, 7j/7</p>
                </div>

                {/* Button */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:bg-[#20BA5A] hover:-translate-y-0.5"
                >
                  {whatsappSvg}
                  Demander mon audit gratuit
                </a>

                {/* Trust */}
                <div className="grid w-full grid-cols-3 gap-3">
                  {[
                    { icon: Clock, label: "Réponse en 2h" },
                    { icon: ShieldCheck, label: "100% gratuit" },
                    { icon: MessageCircle, label: "Sans engagement" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-muted/50 px-2 py-4">
                      <Icon className="h-5 w-5 text-accent" />
                      <span className="text-[11px] font-semibold text-foreground leading-tight text-center">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Message preview */}
                <div className="w-full rounded-2xl border border-border bg-muted/30 p-5 text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">Message pré-rempli</p>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "Bonjour, je souhaite un audit gratuit de ma fiche Google My Business. Mon entreprise est [nom], secteur [activité], ville [ville]."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
