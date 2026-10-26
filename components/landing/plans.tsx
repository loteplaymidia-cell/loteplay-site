import {
  CalendarCheck,
  Camera,
  ChartColumnIncreasing,
  Check,
  CircleX,
  Clapperboard,
  Crown,
  FileText,
  Scissors,
  Send,
  SlidersHorizontal,
  Smartphone,
  Timer,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import { planMessage } from '@/lib/site'
import { cn } from '@/lib/utils'
import { SoftShapes } from './decor'
import { Reveal } from './reveal'
import { SectionHeading, WhatsAppButton } from './ui'

type Plan = {
  name: string
  price: string
  icon: LucideIcon
  featured?: boolean
  dark?: boolean
  features: { icon: LucideIcon; label: string }[]
}

const plans: Plan[] = [
  {
    name: 'Presença',
    price: '997',
    icon: Send,
    features: [
      { icon: Clapperboard, label: '12 Reels' },
      { icon: Smartphone, label: '5 Stories' },
      { icon: CalendarCheck, label: '1 visita de até 2h' },
      { icon: Scissors, label: 'Edição de vídeo' },
      { icon: FileText, label: 'Conteúdo baseado nos tópicos do cliente' },
    ],
  },
  {
    name: 'Destaque',
    price: '1.497',
    icon: ChartColumnIncreasing,
    featured: true,
    features: [
      { icon: Clapperboard, label: '15 Reels' },
      { icon: Smartphone, label: '5 Stories' },
      { icon: CalendarCheck, label: '1 visita de até 3h' },
      { icon: FileText, label: 'Estruturação de tópicos' },
      { icon: Scissors, label: 'Edição de vídeo' },
    ],
  },
  {
    name: 'Referência',
    price: '2.497',
    icon: Trophy,
    dark: true,
    features: [
      { icon: Clapperboard, label: '20 Reels' },
      { icon: Smartphone, label: '10 Stories' },
      { icon: CalendarCheck, label: '2 visitas de até 3h cada' },
      { icon: FileText, label: 'Roteiros completos pela LotePlay' },
      { icon: Scissors, label: 'Edição de vídeo' },
    ],
  },
]

const commonTerms = [
  { icon: Timer, label: 'Entrega em até 5 dias úteis' },
  { icon: CalendarCheck, label: 'Agendamento com 3 dias úteis de antecedência' },
  { icon: SlidersHorizontal, label: '1 rodada de ajustes por conteúdo' },
  { icon: CircleX, label: 'Arquivos brutos não inclusos' },
]

export function Plans() {
  return (
    <section id="planos" className="relative bg-muted py-20 sm:py-24">
      <SoftShapes />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Planos"
          title={
            <>
              Planos <span className="text-primary">LotePlay</span>
            </>
          }
          description="Escolha o nível de presença digital ideal para o momento do seu negócio."
        />
        <p className="mx-auto mt-6 flex w-fit items-center gap-2.5 rounded-full border border-primary/20 bg-white px-5 py-2.5 text-center text-sm font-semibold text-navy shadow-sm">
          <Camera className="size-4 shrink-0 text-primary" aria-hidden="true" />
          Todos os planos incluem captação presencial e edição.
          <Scissors className="size-4 shrink-0 text-primary" aria-hidden="true" />
        </p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => (
            <li key={plan.name} className={cn(plan.featured && 'order-first lg:order-none')}>
              <Reveal delay={index * 100} className="h-full">
                <PlanCard plan={plan} />
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-3 rounded-3xl border border-border bg-white p-5 sm:grid-cols-2 lg:grid-cols-4">
          {commonTerms.map((term) => (
            <li key={term.label} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <term.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-navy">{term.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-sm text-muted-foreground">Condições válidas para todos os planos.</p>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm',
        plan.featured ? 'border-2 border-primary shadow-xl shadow-primary/15' : 'border border-border',
      )}
    >
      {plan.featured && (
        <p className="flex items-center justify-center gap-2 bg-primary py-2 text-sm font-semibold text-primary-foreground">
          <Crown className="size-4" aria-hidden="true" />
          Mais popular
        </p>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              'flex size-12 items-center justify-center rounded-2xl',
              plan.dark ? 'bg-navy text-white' : 'bg-secondary text-primary',
            )}
          >
            <plan.icon className="size-6" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-extrabold text-navy">{plan.name}</h3>
        </div>

        <p className="mt-6 border-t border-border pt-6 font-heading text-navy">
          <span className="text-lg font-bold">R$ </span>
          <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
          <span className="text-lg font-semibold text-muted-foreground">/mês</span>
        </p>

        <ul className="mt-6 flex flex-1 flex-col gap-4">
          {plan.features.map((feature) => (
            <li key={feature.label} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-navy">{feature.label}</span>
            </li>
          ))}
        </ul>

        <WhatsAppButton
          message={planMessage(plan.name)}
          variant={plan.featured ? 'primary' : 'outline'}
          className="mt-8 w-full"
        >
          Quero o {plan.name}
        </WhatsAppButton>
      </div>
    </article>
  )
}
