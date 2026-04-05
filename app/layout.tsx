import type { Metadata, Viewport } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700']
});

const siteUrl = 'https://nextlevelgmb.fr'
const siteName = 'Next Level GMB'
const title = 'Next Level GMB — Optimisation Google My Business pour TPE/PME'
const description = 'Next Level GMB optimise votre fiche Google My Business pour passer devant vos concurrents sur Google Maps. Plus de visibilité locale, plus d\'appels, plus de clients en 30 jours. Service clé en main pour artisans, commerçants et professions libérales.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'Google My Business',
    'optimisation GMB',
    'fiche Google',
    'référencement local',
    'SEO local',
    'Google Maps',
    'TPE PME',
    'artisans',
    'visibilité locale',
    'avis Google',
    'plombier Google Maps',
    'maçon Google Maps',
    'couvreur Google Maps',
    'charpentier Google Maps',
    'référencement local France',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LocalRank — Optimisation Google My Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#34A853',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteName,
  url: siteUrl,
  description,
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  serviceType: 'Optimisation Google My Business',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    name: 'Audit GMB gratuit',
    description: 'Audit complet de votre fiche Google My Business — gratuit et sans engagement',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '430',
    bestRating: '5',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${plusJakartaSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
