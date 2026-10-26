'use client'

import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/lib/utils'
import { ProcessDecor } from './decor'
import { SectionHeading } from './ui'

const faqs = [
  {
    question: 'A LotePlay vai até o meu negócio?',
    answer:
      'Sim. A captação é presencial: a equipe vai até o seu espaço, grava o conteúdo no local e cuida da edição. Você não precisa ter equipamento nem experiência com gravação.',
  },
  {
    question: 'Como funciona o agendamento das visitas?',
    answer:
      'As visitas são agendadas com 3 dias úteis de antecedência, de acordo com a disponibilidade da agenda. A duração depende do plano: 1 visita de até 2h no Presença, 1 visita de até 3h no Destaque e 2 visitas de até 3h cada no Referência.',
  },
  {
    question: 'Quais regiões são atendidas?',
    answer:
      'Atendemos principalmente Mogi das Cruzes. Regiões próximas podem ser avaliadas individualmente conforme localização e disponibilidade de agenda. O atendimento funciona de segunda a sexta, das 11h às 16h.',
  },
  {
    question: 'Como funciona o Reels demonstrativo gratuito?',
    answer:
      'É um Reels demonstrativo presencial gratuito, mediante seleção, região atendida e disponibilidade de agenda. A oferta não é automática para todos: depende de seleção, de o negócio estar em Mogi das Cruzes (ou de análise individual para regiões próximas) e da agenda da equipe. O cliente selecionado deverá publicar 1 Reels e 1 Story mencionando que conheceu e utilizou a LotePlay.',
  },
  {
    question: 'Em quanto tempo recebo os conteúdos?',
    answer: 'A entrega é feita em até 5 dias úteis em todos os planos.',
  },
  {
    question: 'Posso pedir alterações nos vídeos?',
    answer: 'Sim. Todos os planos incluem 1 rodada de ajustes por conteúdo.',
  },
  {
    question: 'Recebo os arquivos brutos das gravações?',
    answer: 'Não. Os arquivos brutos não estão inclusos nos planos. Você recebe os conteúdos editados e prontos para publicar.',
  },
  {
    question: 'Quem cria as ideias e os roteiros?',
    answer:
      'No Presença, o conteúdo é baseado nos tópicos que você nos passa. No Destaque, ajudamos a estruturar os tópicos. No Referência, a LotePlay cria os roteiros completos.',
  },
  {
    question: 'Como funciona o programa de indicação?',
    answer:
      'Você indica a LotePlay, a pessoa indicada entra em contato diretamente e informa quem fez a indicação. Após a contratação e o pagamento da primeira mensalidade, você recebe 15% de desconto na próxima mensalidade. Leads prospectados pela própria LotePlay não participam, e o desconto não pode ser convertido em dinheiro.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="relative bg-muted py-20 sm:py-24">
      <ProcessDecor side="left" />
      <ProcessDecor side="right" className="top-2/3" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
        <ul className="mt-12 grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const buttonId = `${baseId}-q-${index}`
            const panelId = `${baseId}-a-${index}`
            return (
              <li
                key={faq.question}
                className={cn(
                  'rounded-2xl border bg-white transition-colors',
                  isOpen ? 'border-primary/40 shadow-md shadow-primary/5' : 'border-border',
                )}
              >
                <h3 className="font-sans">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy sm:px-6 sm:py-5"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn('size-5 shrink-0 text-primary transition-transform duration-300', isOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground sm:px-6">{faq.answer}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
