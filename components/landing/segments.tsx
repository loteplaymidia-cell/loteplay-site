import { Building2, Car, Croissant, Store } from 'lucide-react'
import { Reveal } from './reveal'

const segments = [
  {
    icon: Croissant,
    title: 'Padarias e alimentação',
    description: 'Produtos saindo do forno, vitrine, bastidores e o atendimento do dia a dia.',
  },
  {
    icon: Car,
    title: 'Lojas de carros',
    description: 'Apresentação de veículos, detalhes, chegadas ao estoque e a experiência da loja.',
  },
  {
    icon: Building2,
    title: 'Imobiliárias e imóveis decorados',
    description: 'Tours pelos ambientes, destaques de cada imóvel e a rotina da equipe.',
  },
  {
    icon: Store,
    title: 'Comércios e serviços locais',
    description: 'Lojas, salões, clínicas e outros negócios que vivem da presença no bairro.',
  },
]

export function Segments() {
  return (
    <section id="segmentos" className="relative overflow-hidden bg-navy py-20 text-navy-foreground sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-10 h-32 w-[30rem] -rotate-[20deg] rounded-full bg-primary/30"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Segmentos
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Feito para quem tem um negócio físico para mostrar
          </h2>
          <p className="mt-4 leading-relaxed text-blue-100/80">
            Se o seu negócio tem um espaço, produtos ou pessoas que merecem ser vistos, a captação presencial é o
            jeito mais direto de transformar isso em conteúdo.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {segments.map((segment, index) => (
            <li key={segment.title}>
              <Reveal delay={index * 80} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <segment.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold">{segment.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-blue-100/80">{segment.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
