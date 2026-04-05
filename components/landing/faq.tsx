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
    question: "Combien de temps pour voir des résultats sur Google Maps ?",
    answer:
      "Les premiers résultats sont visibles entre 2 et 4 semaines : amélioration des positions, augmentation des vues sur la fiche et des appels entrants. Les résultats se consolident sur 2 à 3 mois selon la concurrence de votre zone.",
  },
  {
    question: "Est-ce que vous avez besoin de mon accès à ma fiche Google ?",
    answer:
      "Oui, on vous demande un accès gestionnaire à votre fiche GMB pour pouvoir l'optimiser directement. C'est simple à faire (2 minutes) et vous gardez le contrôle total de votre fiche à tout moment.",
  },
  {
    question: "Qu'est-ce qui est inclus dans l'audit gratuit ?",
    answer:
      "L'audit inclut : analyse de votre fiche GMB actuelle, benchmark de vos 3 concurrents principaux sur Google Maps, identification des axes d'amélioration prioritaires, et estimation de gain de positions réaliste. Résultats envoyés sous 48h.",
  },
  {
    question: "Je n'ai pas de fiche Google My Business. Vous pouvez en créer une ?",
    answer:
      "Absolument. On crée votre fiche de A à Z, on gère la vérification avec Google et on l'optimise dès le départ. Vous démarrez avec une fiche déjà au niveau.",
  },
  {
    question: "Est-ce que vous gérez aussi les avis négatifs injustes ?",
    answer:
      "Oui. On identifie les avis qui violent les CGU de Google (faux avis, concurrents mal intentionnés, avis hors sujet) et on les conteste formellement auprès de Google. Taux de retrait moyen : 70% sur les avis signalés.",
  },
  {
    question: "Pour quelle taille d'entreprise est-ce adapté ?",
    answer:
      "LocalRank est conçu pour les TPE et PME avec une clientèle locale : artisans, restaurants, commerces, professions libérales, agences... Si vous avez moins de 50 salariés et une zone de chalandise géographique, c'est fait pour vous.",
  },
  {
    question: "Est-ce que ça fonctionne aussi si j'ai plusieurs établissements ?",
    answer:
      "Oui, on gère les fiches multi-établissements. Chaque fiche est optimisée individuellement selon sa zone et sa concurrence locale. Contactez-nous pour un devis adapté.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-36 bg-muted/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            FAQ
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"Vos "}
            <span className="font-serif italic text-accent">questions</span>
            {", nos réponses"}
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
              Passer à l'action
            </NeomorphCTA>
          </div>
        </div>
      </div>
    </section>
  )
}
