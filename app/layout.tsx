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

export const metadata: Metadata = {
  title: 'ReviewPilot - On booste vos avis positifs, on gere les negatifs',
  description: 'ReviewPilot aide les commercants, restaurateurs et pros a obtenir plus d\'avis 5 etoiles, contester les avis injustes et repondre automatiquement a chaque commentaire.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${plusJakartaSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
