import { ArrowRight, BadgeCheck, Check, MessageCircle, Share2 } from 'lucide-react'
import { whatsappMessages } from '@/lib/site'
import { SoftShapes } from './decor'
import { Reveal } from './reveal'
import { IconBox, SectionHeading, WhatsAppButton } from './ui'

const steps = [
  {
    icon: Share2,
    title: 'Você indica a LotePlay',
    description: 'Compartilhe o contato da LotePlay com outro negócio que precisa aparecer mais.',
  },
  {
    icon: MessageCircle,
    title: 'O indicado chama e informa quem indicou',
    description: 'A pessoa indicada entra em contato diretamente com a LotePlay e diz quem fez a indicação.',
  },
  {
    icon: BadgeCheck,
    title: 'Contratou e pagou? Você ganha',
    description:
      'Após a contratação e o pagamento da primeira mensalidade do indicado, você recebe 15% de desconto na sua próxima mensalidade.',
  },
]

const rules = [
  'O indicado precisa procurar a LotePlay diretamente.',
  'Leads prospectados pela própria LotePlay não participam.',
  '1 cliente convertido = 15% de desconto em uma mensalidade.',
  'O benefício não pode ser convertido em dinheiro.',
]

export function Referral() {
  return (
    <section id="indique" className="relative py-20 sm:py-24">
      <SoftShapes />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Programa de indicação"
          title={
            <>
              Indique e ganhe <span className="text-primary">15% de desconto</span>
            </>
          }
          description="Sua indicação pode virar desconto na próxima mensalidade."
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <Reveal delay={index * 100} className="h-full">
                <div className="h-full rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <IconBox>
                      <step.icon className="size-6" aria-hidden="true" />
                    </IconBox>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-4 top-1/2 z-10 hidden size-6 -translate-y-1/2 text-primary md:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <p className="mt-6 flex items-start gap-3 rounded-3xl border-2 border-primary bg-white px-6 py-5 font-semibold text-navy shadow-md shadow-primary/10 sm:items-center">
          <BadgeCheck className="mt-0.5 size-6 shrink-0 text-primary sm:mt-0" aria-hidden="true" />
          <span>
            O desconto é liberado somente depois que o cliente indicado{' '}
            <span className="text-primary">contratar e pagar a primeira mensalidade.</span>
          </span>
        </p>

        <p className="mt-6 rounded-3xl bg-secondary px-6 py-5 text-center font-heading text-lg font-bold text-navy">
          Você indica. A empresa chama. Fechou? <span className="text-primary">Você ganha.</span>
        </p>

        <div className="mt-6 grid gap-6 rounded-3xl border border-border bg-muted p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-xl font-bold text-navy">Regras do programa</h3>
            <ul className="mt-4 grid gap-3">
              {rules.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-navy">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
          <WhatsAppButton message={whatsappMessages.referral} className="w-full lg:w-auto">
            Compartilhe nosso WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
