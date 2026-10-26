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
  title: 'LotePlay | Você faz seu negócio acontecer. A gente faz ele aparecer.',
  description:
    'A LotePlay vai até o seu negócio em Mogi das Cruzes, capta o conteúdo, ajuda com ideias e roteiros e entrega Reels e Stories prontos para publicar.',
  generator: 'v0.app',
  openGraph: {
    title: 'LotePlay | Você faz seu negócio acontecer. A gente faz ele aparecer.',
    description: 'Captação presencial, edição e Reels e Stories prontos para negócios locais de Mogi das Cruzes.',
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
