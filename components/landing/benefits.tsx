import { Lightbulb, Repeat, Store, Timer, Video } from 'lucide-react'
import { Reveal } from './reveal'

const benefits = [
  {
    icon: Video,
    title: 'Sem precisar de equipamento',
    description: 'Levamos tudo o que é necessário para captar conteúdo com qualidade profissional.',
  },
  {
    icon: Timer,
    title: 'Mais tempo para o seu negócio',
    description: 'Você atende seus clientes enquanto nós produzimos e editamos o conteúdo.',
  },
  {
    icon: Lightbulb,
    title: 'Sem travar nas ideias',
    description: 'Ajudamos a estruturar os tópicos e, no plano Dominância, criamos roteiros completos.',
  },
  {
    icon: Repeat,
    title: 'Constância nas redes',
    description: 'Um volume mensal de Reels e Stories para manter seu perfil sempre ativo.',
  },
  {
    icon: Store,
    title: 'Atendimento local',
    description: 'Estamos em Mogi das Cruzes e vamos até o seu negócio para as gravações.',
  },
]

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-10 h-32 w-[30rem] -rotate-[20deg] rounded-full bg-primary/30"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Benefícios
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Conteúdo profissional sem complicar a sua rotina
          </h2>
          <p className="mt-4 leading-relaxed text-blue-100/80">
            A LotePlay existe para que negócios locais tenham presença digital de qualidade, mesmo sem uma equipe
            de marketing.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <li key={benefit.title} className={index === 0 ? 'sm:col-span-2' : ''}>
              <Reveal delay={index * 80} className="h-full">
                <div className="flex h-full gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <benefit.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-blue-100/80">{benefit.description}</p>
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
