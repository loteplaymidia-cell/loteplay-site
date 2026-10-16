import { CalendarCheck, MessageCircle, Send } from 'lucide-react'
import { Reveal } from './reveal'
import { IconBox, SectionHeading } from './ui'

const steps = [
  {
    icon: MessageCircle,
    title: 'Fale com a gente',
    description: 'Chame a LotePlay no WhatsApp, conte sobre o seu negócio e escolha o plano ideal.',
  },
  {
    icon: CalendarCheck,
    title: 'Agendamos a visita',
    description: 'A visita é agendada com 3 dias úteis de antecedência e nós captamos o conteúdo no seu local.',
  },
  {
    icon: Send,
    title: 'Receba pronto para postar',
    description: 'Editamos tudo e entregamos em até 5 dias úteis, com 1 rodada de ajustes por conteúdo.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato ao conteúdo publicado"
          description="Um processo simples para você focar no seu negócio enquanto cuidamos do conteúdo."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 100} className="h-full">
                <div className="relative h-full rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
                  <span className="absolute right-6 top-6 flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <IconBox>
                    <step.icon className="size-6" aria-hidden="true" />
                  </IconBox>
                  <h3 className="mt-6 text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
