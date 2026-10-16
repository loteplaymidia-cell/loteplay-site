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
  freeReels: 'Olá, LotePlay! Vim pelo site e quero meu Reels gratuito da oferta de lançamento.',
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
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: '#indique', label: 'Indique e ganhe' },
  { href: '#faq', label: 'Dúvidas' },
]
