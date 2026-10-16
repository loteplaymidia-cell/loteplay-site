import { site, whatsappMessages } from '@/lib/site'
import { Reveal } from './reveal'
import { WhatsAppButton } from './ui'

export function FinalCta() {
  return (
    <section className="py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">
          Pronto para ter mais conteúdo com <span className="text-primary">menos esforço</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Fale com a LotePlay pelo WhatsApp, tire suas dúvidas e garanta seu Reels gratuito da oferta de lançamento.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton message={whatsappMessages.freeReels} className="w-full px-7 py-4 sm:w-auto">
            Quero meu Reels gratuito
          </WhatsAppButton>
          <WhatsAppButton variant="outline" className="w-full px-7 py-4 sm:w-auto">
            {site.whatsappDisplay}
          </WhatsAppButton>
        </div>
      </Reveal>
    </section>
  )
}
