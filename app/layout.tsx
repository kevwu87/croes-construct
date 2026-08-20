import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.croesconstruct.be'),
  title: 'Croes Construct | Tuinaannemer Koksijde, Oostende & Kust',
  description: 'Tuinaanleg, omheiningen, terrassen en opritten in Koksijde, Oostende, Veurne, Nieuwpoort en Brugge. Vakmanschap en kwaliteit voor uw buitenruimte.',
  keywords: 'tuinaannemer Koksijde, tuinaanleg Oostende, hovenier Veurne, terrassen Nieuwpoort, omheiningen Brugge, tuinaanleg West-Vlaanderen',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'LO-y0cQ3NhZ43E8IkjyUR3-b-KW2pNYpjf8krQHoWjQ',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Croes Construct | Tuinaannemer aan de Kust',
    description: 'Vakmanschap dat uw buitenruimte transformeert. Actief in Koksijde, Oostende, Veurne, Nieuwpoort en Brugge.',
    url: '/',
    siteName: 'Croes Construct',
    images: ['/logo.jpg'],
    locale: 'nl_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Croes Construct',
  image: 'https://www.croesconstruct.be/logo.jpg',
  url: 'https://www.croesconstruct.be',
  telephone: '+32478406967',
  email: 'Croes-construct@hotmail.com',
  founder: { '@type': 'Person', name: 'Tobias Croes' },
  areaServed: ['Koksijde', 'Oostende', 'Veurne', 'Nieuwpoort', 'Brugge'],
  address: { '@type': 'PostalAddress', addressCountry: 'BE' },
  sameAs: [
    'https://www.facebook.com/p/Tuinen-Croes-100027303922559/?locale=nl_NL',
    'https://www.instagram.com/tuinen_croes/',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tuinaanleg' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Omheiningen' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Opritten' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Terrassen' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Snoeien van bomen' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Grond- en rioleringswerken' } },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}