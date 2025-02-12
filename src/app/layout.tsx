import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Italify – Authentic Italian Living',
    default: 'Find Your Dream Italian Home | Italify – Authentic Italian Living',
  },
  description: 'Discover curated properties and seamless relocation services with Italify. Helping Australians find their dream home in Italy with ease.',
  keywords: ['Italian properties', 'relocation services', 'living in Italy', 'Italian real estate', 'move to Italy', 'Italian lifestyle'],
  authors: [{ name: 'Borana Meta' }],
  openGraph: {
    title: 'Find Your Dream Italian Home | Italify – Authentic Italian Living',
    description: 'Discover curated properties and seamless relocation services with Italify. Helping Australians find their dream home in Italy with ease.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          <main className="container mx-auto px-4 py-8 flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
