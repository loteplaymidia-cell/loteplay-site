import { CalendarCheck, Info, MessageCircle, Send, Video } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './ui'

const steps = [
  {
    icon: MessageCircle,
    title: 'Você conta o que precisa mostrar',
    description: 'Pelo WhatsApp, você fala sobre o seu negócio, seus produtos e o que quer destacar.',
  },
  {
    icon: CalendarCheck,
    title: 'A LotePlay agenda e vai até o seu negócio',
    description: 'A visita é agendada com 3 dias úteis de antecedência, no seu próprio espaço.',
  },
  {
    icon: Video,
    title: 'A equipe capta, organiza as ideias e edita',
    description: 'Gravamos no local, estruturamos o conteúdo e cuidamos de toda a edição.',
  },
  {
    icon: Send,
    title: 'Você recebe o conteúdo pronto para publicar',
    description: 'Entrega em até 5 dias úteis, com 1 rodada de ajustes por conteúdo.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Um caminho simples até o seu conteúdo pronto"
          description="Você cuida do seu negócio. A LotePlay cuida de tudo o que envolve fazer ele aparecer."
        />

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 w-0.5 bg-primary/20 lg:inset-x-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:top-6 lg:h-0.5 lg:w-auto"
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <Reveal delay={index * 100} className="flex gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-8 ring-muted">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1 rounded-3xl border border-border bg-white p-5 shadow-sm lg:mt-2 lg:w-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Etapa {index + 1}</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-primary/20 bg-white px-5 py-4 text-sm leading-relaxed text-navy">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <span>
            Atendemos principalmente Mogi das Cruzes. Regiões próximas podem ser avaliadas individualmente conforme
            localização e disponibilidade de agenda.
          </span>
        </p>
      </div>
    </section>
  )
}
