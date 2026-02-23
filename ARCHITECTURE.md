# Architecture - ReviewPilot

## Vue d'Ensemble

ReviewPilot est une landing page Next.js 16 optimisée pour la conversion, construite avec une architecture moderne et maintenable.

## Stack Technique

### Frontend
- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 4.2.0
- **UI Components**: Radix UI + shadcn/ui (New York style)
- **Icons**: Lucide React
- **Animations**: CSS native + Tailwind

### Backend
- **API Routes**: Next.js API Routes
- **Email**: Resend
- **Validation**: Zod (via React Hook Form)

### DevOps
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (Next.js 16)
- **Deployment**: Vercel (recommandé)
- **Analytics**: Vercel Analytics

## Structure des Dossiers

```
reviewpilot/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   └── contact/
│   │       └── route.ts          # Endpoint de contact
│   ├── globals.css               # Styles globaux + design tokens
│   ├── layout.tsx                # Layout racine + fonts
│   └── page.tsx                  # Page d'accueil
│
├── components/
│   ├── landing/                  # Composants de la landing page
│   │   ├── navbar.tsx            # Navigation fixe
│   │   ├── hero.tsx              # Section hero avec métriques animées
│   │   ├── logos.tsx             # Bande de logos plateformes
│   │   ├── features.tsx          # 3 services principaux
│   │   ├── how-it-works.tsx      # Processus en 4 étapes
│   │   ├── case-studies.tsx      # Témoignages clients
│   │   ├── audit-value.tsx       # Valeur du diagnostic
│   │   ├── pricing.tsx           # Formulaire de contact
│   │   ├── faq.tsx               # Questions fréquentes
│   │   ├── cta-section.tsx       # CTA final
│   │   └── footer.tsx            # Footer
│   │
│   ├── ui/                       # Composants UI réutilisables
│   │   ├── accordion.tsx         # Accordion (FAQ)
│   │   ├── button.tsx            # Bouton standard
│   │   ├── neomorph-cta.tsx      # CTA avec effet neomorphique
│   │   └── ...                   # 58 composants shadcn/ui
│   │
│   ├── smooth-scroll.tsx         # Gestion du smooth scroll
│   ├── theme-provider.tsx        # Provider de thème (non utilisé)
│   └── whatsapp-widget.tsx       # Widget WhatsApp flottant
│
├── lib/
│   ├── constants.ts              # Constantes partagées
│   └── utils.ts                  # Utilitaires (cn)
│
├── hooks/
│   ├── use-mobile.ts             # Hook de détection mobile
│   └── use-toast.ts              # Hook de toast notifications
│
├── public/                       # Assets statiques
│   ├── logo.svg                  # Logo principal
│   ├── icon.svg                  # Favicon
│   └── ...                       # Autres icônes
│
├── scripts/
│   └── verify-build.sh           # Script de vérification
│
└── Configuration
    ├── next.config.mjs           # Config Next.js
    ├── tsconfig.json             # Config TypeScript
    ├── components.json           # Config shadcn/ui
    ├── postcss.config.mjs        # Config PostCSS
    ├── package.json              # Dépendances
    └── .env.local                # Variables d'environnement
```

## Flux de Données

### 1. Navigation & Scroll
```
User Click → SmoothScroll Component → Smooth Scroll to Section
```

### 2. Formulaire de Contact
```
User Submit → Form Validation → API Route → Resend → Email Sent → Success State
```

### 3. WhatsApp
```
User Click → WhatsApp Widget → WhatsApp Web/App (external)
```

## Composants Clés

### Landing Page Sections (11 composants)
1. **Navbar**: Navigation fixe avec CTA
2. **Hero**: Headline + 3 piliers + métriques animées
3. **Logos**: Plateformes couvertes
4. **Features**: 3 services avec stats
5. **HowItWorks**: Processus en 4 étapes avec design Google
6. **CaseStudies**: 3 témoignages clients
7. **AuditValue**: 4 livrables du diagnostic
8. **Pricing**: Formulaire de contact + social proof
9. **FAQ**: 7 questions avec accordion
10. **CtaSection**: CTA final avec glows
11. **Footer**: Footer simple

### Composants Utilitaires
- **SmoothScroll**: Gère le scroll smooth vers les sections
- **WhatsAppWidget**: Widget flottant en bas à droite
- **NeomorphCTA**: Bouton CTA avec effet neomorphique

## Design System

### Couleurs
```css
--accent: oklch(0.55 0.25 150)      /* Vert principal */
--foreground: oklch(0.12 0 0)       /* Noir texte */
--background: oklch(0.99 0 0)       /* Blanc fond */
--muted-foreground: oklch(0.45 0 0) /* Gris texte */
```

### Typographie
- **Sans**: DM Sans (corps de texte)
- **Serif**: Plus Jakarta Sans (accents italiques)
- **Mono**: Geist Mono (code)

### Spacing
- Sections: `py-32 md:py-40` (128px / 160px)
- Cards: `p-8 md:p-14` (32px / 56px)
- Gaps: `gap-6` à `gap-12` (24px à 48px)

### Radius
- Cards: `rounded-3xl` (24px)
- Buttons: `rounded-2xl` (16px)
- Icons: `rounded-2xl` (16px)

## Patterns de Code

### Composant Landing Typique
```typescript
// 1. Imports
import { Icon } from "lucide-react"
import { Component } from "@/components/ui/component"

// 2. Data (constantes)
const data = [...]

// 3. Composant
export function Section() {
  return (
    <section id="section" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Tag
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Titre
          </h2>
        </div>
        
        {/* Content */}
        <div className="mt-20">
          {/* ... */}
        </div>
      </div>
    </section>
  )
}
```

### API Route Typique
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Validation
    // Traitement
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Message' }, { status: 500 })
  }
}
```

## Performance

### Optimisations
- ✅ Static Generation pour la page d'accueil
- ✅ Turbopack pour le build rapide
- ✅ Images non optimisées (SVG uniquement)
- ✅ CSS minimal (Tailwind purge)
- ✅ Pas de JavaScript inutile

### Métriques Cibles
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Build time: ~1.5s
- Bundle size: ~33MB

## Sécurité

### Variables d'Environnement
- `RESEND_API_KEY`: Clé API Resend (serveur uniquement)

### Validation
- Validation côté client (React Hook Form)
- Validation côté serveur (API Route)
- Sanitization des inputs

### Headers
- CORS configuré par Next.js
- CSP recommandé en production

## Maintenance

### Ajout d'une Section
1. Créer `components/landing/nouvelle-section.tsx`
2. Importer dans `app/page.tsx`
3. Ajouter dans le JSX
4. Ajouter l'ancre dans la navbar si nécessaire

### Modification du Formulaire
1. Éditer `components/landing/pricing.tsx`
2. Mettre à jour la validation
3. Mettre à jour l'API `app/api/contact/route.ts`

### Modification des Constantes
1. Éditer `lib/constants.ts`
2. Les changements se propagent automatiquement

## Tests

### Build
```bash
pnpm build
```

### Vérification
```bash
pnpm verify
```

### Diagnostics TypeScript
```bash
# Via l'IDE ou
pnpm build
```

## Déploiement

### Vercel (Recommandé)
```bash
vercel --prod
```

### Autres Plateformes
- Netlify: Compatible
- Cloudflare Pages: Compatible
- AWS Amplify: Compatible

## Évolutions Futures

### Court Terme
- [ ] Ajouter ESLint
- [ ] Ajouter Prettier
- [ ] Ajouter tests unitaires (Vitest)
- [ ] Ajouter tests E2E (Playwright)

### Moyen Terme
- [ ] Ajouter un CMS (Sanity/Contentful)
- [ ] Ajouter un blog
- [ ] Ajouter des landing pages dynamiques
- [ ] Ajouter A/B testing

### Long Terme
- [ ] Ajouter un dashboard client
- [ ] Ajouter un système de paiement
- [ ] Ajouter une API publique

---

**Dernière mise à jour**: 23 février 2026
