export const site = {
  name: 'LotePlay',
  city: 'Mogi das Cruzes',
  whatsappNumber: '5511958795898',
  whatsappDisplay: '(11) 95879-5898',
  email: 'loteplaymidia@gmail.com',
  hours: 'Segunda a sexta, das 11h às 16h',
}

export const whatsappMessages = {
  default: 'Olá, LotePlay! Vim pelo site e quero saber mais sobre os planos de conteúdo.',
  availability: 'Olá, LotePlay! Vim pelo site e quero consultar a disponibilidade de visita para o meu negócio.',
  demoReels:
    'Olá, LotePlay! Vim pelo site e quero consultar a disponibilidade do Reels demonstrativo gratuito para o meu negócio.',
  referral: 'Olá, LotePlay! Fui indicado(a) por: ',
} as const

export function whatsappLink(message: string = whatsappMessages.default) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function planMessage(planName: string) {
  return `Olá, LotePlay! Vim pelo site e tenho interesse no plano ${planName}.`
}

export const navLinks = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#segmentos', label: 'Segmentos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: '#indique', label: 'Indique e ganhe' },
  { href: '#faq', label: 'Dúvidas' },
]
