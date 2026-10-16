import { Camera, Clapperboard, FileText, Scissors, Smartphone } from 'lucide-react'
import { Reveal } from './reveal'
import { IconBox, SectionHeading } from './ui'

const services = [
  {
    icon: Clapperboard,
    title: 'Reels',
    description: 'Vídeos verticais pensados para apresentar seus produtos, serviços e o dia a dia da sua empresa.',
  },
  {
    icon: Smartphone,
    title: 'Stories',
    description: 'Conteúdos rápidos para manter sua marca presente e próxima de quem já te segue.',
  },
  {
    icon: Camera,
    title: 'Fotos',
    description: 'Captação de fotos profissionais do seu espaço, equipe e produtos durante as visitas.',
  },
  {
    icon: Scissors,
    title: 'Edição',
    description: 'Edição de vídeo completa, entregando o conteúdo pronto para publicar.',
  },
  {
    icon: FileText,
    title: 'Roteiros',
    description: 'Estruturação de tópicos e roteiros completos para quem não quer se preocupar com ideias.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo o que o seu Instagram precisa"
          description="Da ideia à edição final, a LotePlay produz o conteúdo do seu negócio de ponta a ponta."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.title} className={index === services.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <Reveal delay={index * 80} className="h-full">
                <div className="group h-full rounded-3xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <IconBox className="transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="size-6" aria-hidden="true" />
                  </IconBox>
                  <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
