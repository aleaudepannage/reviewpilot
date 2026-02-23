# ReviewPilot

Plateforme de gestion de réputation en ligne pour les entreprises.

## Stack Technique

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Email**: Resend
- **Analytics**: Vercel Analytics

## Prérequis

- Node.js 18+
- pnpm (recommandé) ou npm

## Installation

```bash
# Installer les dépendances
pnpm install

# Copier le fichier d'environnement
cp .env.local.example .env.local

# Configurer les variables d'environnement
# Éditer .env.local et ajouter votre clé API Resend
```

## Variables d'environnement

```env
RESEND_API_KEY=your_resend_api_key_here
```

## Développement

```bash
# Lancer le serveur de développement
pnpm dev

# Ouvrir http://localhost:3000
```

## Build & Production

```bash
# Créer un build de production
pnpm build

# Vérifier que tout est prêt pour la production
pnpm verify

# Lancer le serveur de production
pnpm start
```

## Structure du Projet

```
├── app/                    # App Router (Next.js 16)
│   ├── api/               # API Routes
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/
│   ├── landing/           # Composants de la landing page
│   ├── ui/                # Composants UI réutilisables
│   ├── smooth-scroll.tsx  # Gestion du smooth scroll
│   └── whatsapp-widget.tsx
├── lib/
│   ├── constants.ts       # Constantes partagées
│   └── utils.ts           # Utilitaires
└── public/                # Assets statiques
```

## Fonctionnalités

- ✅ Landing page responsive
- ✅ Formulaire de contact avec validation
- ✅ Intégration WhatsApp
- ✅ Smooth scroll vers les sections
- ✅ Animations optimisées
- ✅ SEO optimisé
- ✅ Analytics intégré

## Déploiement

Le projet est optimisé pour un déploiement sur Vercel :

```bash
# Déployer sur Vercel
vercel
```

## License

Propriétaire - ReviewPilot © 2026
