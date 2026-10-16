import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'LotePlay | Reels, Stories e fotos para negócios locais em Mogi das Cruzes',
  description:
    'A LotePlay cria Reels, Stories e fotos profissionais para negócios locais de Mogi das Cruzes. Ganhe 1 Reels gratuito na oferta de lançamento.',
  generator: 'v0.app',
  openGraph: {
    title: 'LotePlay | Mais conteúdo em menos tempo para negócios locais',
    description: 'Reels, Stories e fotos profissionais para negócios locais de Mogi das Cruzes.',
    images: ['/images/logo-loteplay.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/images/logo-loteplay.png',
    apple: '/images/logo-loteplay.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
