import { Clapperboard, Info, Smartphone, Sparkles } from 'lucide-react'
import { whatsappMessages } from '@/lib/site'
import { Reveal } from './reveal'
import { WhatsAppButton } from './ui'

const conditions = [
  'A oferta não é automática para todos: os negócios passam por seleção.',
  'Atendemos principalmente Mogi das Cruzes. Regiões próximas passam por análise individual.',
  'Depende da disponibilidade de agenda da equipe.',
  'O selecionado publica 1 Reels e 1 Story mencionando que conheceu e utilizou a LotePlay.',
]

export function Offer() {
  return (
    <section id="oferta" className="px-4 py-10 sm:px-6 sm:py-16">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-14">
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
                <Sparkles className="size-4" aria-hidden="true" />
                Oferta de lançamento · vagas limitadas
              </p>
              <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Conheça a LotePlay na prática
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-lg font-semibold leading-relaxed">
                Reels demonstrativo presencial gratuito, mediante seleção, região atendida e disponibilidade de agenda.
              </p>
              <ul className="mt-6 grid gap-2.5">
                {conditions.map((condition) => (
                  <li key={condition} className="flex items-start gap-2.5 text-sm leading-relaxed text-blue-50">
                    <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {condition}
                  </li>
                ))}
              </ul>
              <WhatsAppButton message={whatsappMessages.demoReels} variant="white" className="mt-8 px-7 py-4">
                Consultar disponibilidade
              </WhatsAppButton>
            </div>

            <div className="rounded-3xl bg-white p-6 text-navy shadow-xl sm:p-8">
              <h3 className="text-lg font-bold">Contrapartida simples</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Se sua empresa for selecionada, ela deverá publicar:
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
