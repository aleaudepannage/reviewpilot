"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const faqs = [
  {
    question: "Est-ce legal de contester des avis en ligne ?",
    answer:
      "Oui, a 100%. Nous ne supprimons pas les avis parce qu'ils sont negatifs. Nous contestons uniquement ceux qui violent les CGU des plateformes : faux avis, diffamation, conflit d'interet, spam. Chaque contestation est fondee juridiquement.",
  },
  {
    question: "Que comprend exactement le diagnostic gratuit ?",
    answer:
      "15 minutes avec un expert : analyse de votre note sur toutes les plateformes, identification des avis contestables, recommandations de collecte, et simulation d'impact sur votre CA. Vous repartez avec un plan d'action chiffre.",
  },
  {
    question: "Le diagnostic m'engage-t-il a quelque chose ?",
    answer:
      "Non. Le diagnostic est 100% gratuit, sans engagement. C'est un echange consultatif. Vous decidez ensuite librement. Zero pression commerciale.",
  },
  {
    question: "Quelles plateformes sont couvertes ?",
    answer:
      "Google Business, TripAdvisor, Facebook, Trustpilot, Yelp, Booking.com, Pages Jaunes et d'autres. Si votre plateforme n'est pas dans la liste, contactez-nous.",
  },
  {
    question: "En combien de temps voit-on des resultats ?",
    answer:
      "Amelioration de la note des les 2-3 premieres semaines (collecte). Contestation d'avis : 5 a 15 jours ouvrables. Resultats significatifs et mesurables au bout de 1 mois.",
  },
  {
    question: "Pour quel type d'entreprise ?",
    answer:
      "Restaurants, Hotels, Cabinets medicaux, Salons de coiffure, Agences immobilieres, Artisans, Commerces... Toute entreprise dont l'activite depend des avis en ligne.",
  },
  {
    question: "Comment fonctionnent les reponses automatiques ?",
    answer:
      "Reponses professionnelles generees et calibrees sur votre ton de marque. Deux modes : validation avant publication ou automatique. Temps de reponse moyen : moins de 15 minutes.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-32 md:py-40 bg-muted/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            FAQ
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"Vos "}
            <span className="font-serif italic text-accent">questions</span>
            {", nos reponses"}
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-16">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border py-2">
              <AccordionTrigger className="text-left text-foreground text-[15px] font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <div className="mt-5">
            <NeomorphCTA href="#pricing">
              {"Passer à l'action"}
            </NeomorphCTA>
          </div>
        </div>
      </div>
    </section>
  )
}
