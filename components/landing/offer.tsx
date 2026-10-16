import { Clapperboard, Gift, Smartphone } from 'lucide-react'
import { whatsappMessages } from '@/lib/site'
import { Reveal } from './reveal'
import { WhatsAppButton } from './ui'

export function Offer() {
  return (
    <section id="oferta" className="px-4 py-10 sm:px-6 sm:py-16">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-8 h-28 w-96 -rotate-[20deg] rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-20 h-24 w-80 -rotate-[20deg] rounded-full bg-navy/25"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
                <Gift className="size-4" aria-hidden="true" />
                Oferta de lançamento
              </p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Ganhe 1 Reels gratuito para a sua empresa
              </h2>
              <p className="mt-4 max-w-lg text-pretty leading-relaxed text-blue-50">
                Conheça o trabalho da LotePlay na prática. Produzimos 1 Reels gratuito para o seu negócio em troca
                de uma divulgação simples nas suas redes.
              </p>
              <WhatsAppButton message={whatsappMessages.freeReels} variant="white" className="mt-8 px-7 py-4">
                Quero meu Reels gratuito
              </WhatsAppButton>
            </div>

            <div className="rounded-3xl bg-white p-6 text-navy shadow-xl sm:p-8">
              <h3 className="text-lg font-bold">Como participar</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Para receber o Reels gratuito, sua empresa deve publicar:
              </p>
              <ul className="mt-5 grid gap-4">
                <li className="flex items-center gap-4 rounded-2xl bg-secondary p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Clapperboard className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">1 Reels dizendo que conheceu e utilizou a LotePlay</span>
                </li>
                <li className="flex items-center gap-4 rounded-2xl bg-secondary p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Smartphone className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">1 Story dizendo que conheceu e utilizou a LotePlay</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
