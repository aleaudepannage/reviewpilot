"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Building2, Mail, User } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/constants"

export function Pricing() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="pricing" className="py-24 md:py-32 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Passez a l'action
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Reservez votre "}
            <span className="font-serif italic text-accent">diagnostic gratuit</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {"15 minutes avec un expert pour analyser votre reputation et repartir avec un plan d'action chiffre."}
          </p>
        </div>

        <div className="mx-auto mt-20 grid items-start gap-10 lg:max-w-5xl lg:grid-cols-5">
          {/* Left - Social proof -- 2 cols */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-6">
            {/* Metrics */}
            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Nos resultats</p>
              <div className="mt-6 space-y-5">
                {[
                  { value: "4.7/5", label: "Note moyenne atteinte" },
                  { value: "85%", label: "Taux de retrait d'avis injustes" },
                  { value: "430+", label: "Entreprises accompagnees" },
                  { value: "+50%", label: "CA moyen en plus" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{m.label}</span>
                    <span className="text-sm font-bold text-foreground">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included */}
            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{"Inclus dans le diagnostic"}</p>
              <ul className="mt-6 space-y-4">
                {[
                  "Analyse de votre note sur toutes les plateformes",
                  "Identification des avis contestables",
                  "Recommandations personnalisees",
                  "Simulation d'impact sur votre CA",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Removed trust badges */}
            </div>
          </div>

          {/* Right - Form -- 3 cols */}
          <div className="order-1 lg:order-2 lg:col-span-3 pricing-form-container">
            <div className="overflow-hidden rounded-3xl border-2 border-accent/20 bg-card shadow-2xl shadow-accent/[0.06] mx-auto max-w-[600px]">
              {/* Header */}
              <div className="bg-accent/[0.04] border-b border-accent/10 px-8 py-5">
                <p className="text-center text-sm font-semibold text-foreground">
                  {"Recevez votre analyse personnalisee en 24h"}
                </p>
              </div>

              <div className="p-8 md:p-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="audit-name" className="mb-2.5 block text-sm font-semibold text-foreground">
                          Nom complet
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                          <input
                            id="audit-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Jean Dupont"
                            className="w-full rounded-2xl border border-input bg-background py-3.5 pr-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="audit-company" className="mb-2.5 block text-sm font-semibold text-foreground">
                          Entreprise
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                          <input
                            id="audit-company"
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Mon Restaurant"
                            className="w-full rounded-2xl border border-input bg-background py-3.5 pr-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="audit-email" className="mb-2.5 block text-sm font-semibold text-foreground">
                        Email professionnel
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                        <input
                          id="audit-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jean@monentreprise.fr"
                          className="w-full rounded-2xl border border-input bg-background py-3.5 pr-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="audit-phone" className="mb-2.5 block text-sm font-semibold text-foreground">
                        Telephone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                        <input
                          id="audit-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="06 12 34 56 78"
                          className="w-full rounded-2xl border border-input bg-background py-3.5 pr-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base h-[3.5rem] rounded-2xl shadow-xl shadow-accent/25 font-semibold disabled:opacity-50"
                    >
                      {isLoading ? "Envoi en cours..." : "Réserver mon appel"}
                    </Button>

                    {error && (
                      <p className="mt-3 text-sm text-red-500 text-center">{error}</p>
                    )}

                    {/* WhatsApp option */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Ou</span>
                      </div>
                    </div>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white hover:bg-[#20BA5A] text-base h-[3.5rem] rounded-2xl shadow-xl font-semibold transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Contacter via WhatsApp
                    </a>
                  </form>
                ) : (
                  <div className="py-16 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle2 className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-foreground">
                      {"C'est envoye !"}
                    </h3>
                    <p className="mt-3 max-w-sm mx-auto text-sm leading-relaxed text-muted-foreground">
                      {"Un expert vous contacte sous 24h pour planifier votre diagnostic de 15 minutes."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
