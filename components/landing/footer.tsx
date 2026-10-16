import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react'
import { navLinks, site, whatsappLink } from '@/lib/site'
import { Logo } from './logo'

export function Footer() {
  const contacts = [
    {
      icon: MessageCircle,
      label: `WhatsApp ${site.whatsappDisplay}`,
      href: whatsappLink(),
      external: true,
    },
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: site.hours },
    { icon: MapPin, label: `${site.city}, SP` },
  ]

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100/75">
            Reels, Stories e fotos profissionais para negócios locais de Mogi das Cruzes.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-blue-200">Navegação</h2>
          <ul className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-blue-100/80 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-blue-200">Contato</h2>
          <ul className="mt-4 grid gap-3">
            {contacts.map((contact) => (
              <li key={contact.label} className="flex items-center gap-3 text-sm text-blue-100/80">
                <contact.icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {contact.href ? (
                  <a
                    href={contact.href}
                    {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="break-all transition-colors hover:text-white"
                  >
                    {contact.label}
                  </a>
                ) : (
                  <span>{contact.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-blue-100/60 sm:px-6">
          © {new Date().getFullYear()} LotePlay. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
