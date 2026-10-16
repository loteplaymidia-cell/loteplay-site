'use client'

import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './ui'

const faqs = [
  {
    question: 'Preciso ter equipamento ou experiência com gravação?',
    answer:
      'Não. A LotePlay vai até o seu negócio e cuida da captação, da edição e da organização do conteúdo. Você só precisa estar disponível no dia da visita.',
  },
  {
    question: 'Em quanto tempo recebo os conteúdos?',
    answer: 'A entrega é feita em até 5 dias úteis em todos os planos.',
  },
  {
    question: 'Como funciona o agendamento das visitas?',
    answer:
      'As visitas são agendadas com 3 dias úteis de antecedência. A duração depende do plano: até 2h no Essencial, até 3h no Performance e 2 visitas de até 3h cada no Dominância.',
  },
  {
    question: 'Posso pedir alterações nos vídeos?',
    answer: 'Sim. Todos os planos incluem 1 rodada de ajustes por conteúdo.',
  },
  {
    question: 'Recebo os arquivos brutos das gravações?',
    answer: 'Não. Os arquivos brutos não estão inclusos nos planos. Você recebe os conteúdos editados e prontos.',
  },
  {
    question: 'Quem cria as ideias e os roteiros?',
    answer:
      'No Essencial, o conteúdo é baseado nos tópicos que você nos passa. No Performance, ajudamos a estruturar os tópicos. No Dominância, a LotePlay cria os roteiros completos.',
  },
  {
    question: 'Como funciona o Reels gratuito?',
    answer:
      'Na oferta de lançamento, produzimos 1 Reels gratuito para sua empresa. Em troca, você publica 1 Reels e 1 Story dizendo que conheceu e utilizou a LotePlay.',
  },
  {
    question: 'O desconto da indicação pode virar dinheiro?',
    answer:
      'Não. Cada cliente indicado que contratar um plano gera 15% de desconto em uma mensalidade, e o benefício não pode ser convertido em dinheiro.',
  },
  {
    question: 'Quais regiões vocês atendem e qual o horário de atendimento?',
    answer:
      'Atendemos negócios locais de Mogi das Cruzes. Nosso atendimento funciona de segunda a sexta, das 11h às 16h.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
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
