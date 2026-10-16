import Image from 'next/image'
import { Gift, MapPin } from 'lucide-react'
import { whatsappMessages } from '@/lib/site'
import { WhatsAppButton } from './ui'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-24 w-96 -rotate-[20deg] rounded-full bg-accent/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-16 h-28 w-[28rem] -rotate-[20deg] rounded-full bg-accent/60"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            Negócios locais de Mogi das Cruzes
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Mais conteúdo em menos tempo para <span className="text-primary">negócios locais</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A LotePlay cria Reels, Stories e fotos profissionais para a sua empresa. Você não precisa ter
            equipamento, tempo ou ideias: nós cuidamos da captação, da edição e do roteiro.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={whatsappMessages.freeReels} className="px-7 py-4">
              Quero meu Reels gratuito
            </WhatsAppButton>
            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-7 py-4 text-sm font-semibold text-navy transition-colors hover:border-primary/40 hover:text-primary sm:text-base"
            >
              Ver planos
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li>Reels</li>
            <li aria-hidden="true">•</li>
            <li>Stories</li>
            <li aria-hidden="true">•</li>
            <li>Fotos</li>
            <li aria-hidden="true">•</li>
            <li>Edição</li>
            <li aria-hidden="true">•</li>
            <li>Roteiros</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-700 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-primary/20">
            <Image
              src="/images/hero-gravacao.png"
              alt="Celular em um estabilizador gravando a dona de uma padaria local organizando pães no balcão"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-xl sm:-left-6 sm:right-auto">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Gift className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy">Oferta de lançamento</p>
              <p className="text-sm text-muted-foreground">1 Reels gratuito para sua empresa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
