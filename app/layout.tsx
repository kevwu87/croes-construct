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
  title: 'Croes Construct | Tuinaannemer Koksijde, Oostende & Kust',
  description: 'Tuinaanleg, omheiningen, terrassen en opritten in Koksijde, Oostende, Veurne, Nieuwpoort en Brugge. Vakmanschap en kwaliteit voor uw buitenruimte.',
  keywords: 'tuinaannemer Koksijde, tuinaanleg Oostende, hovenier Veurne, terrassen Nieuwpoort, omheiningen Brugge, tuinaanleg West-Vlaanderen',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Croes Construct | Tuinaannemer aan de Kust',
    description: 'Vakmanschap dat uw buitenruimte transformeert. Actief in Koksijde, Oostende, Veurne, Nieuwpoort en Brugge.',
    locale: 'nl_BE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}