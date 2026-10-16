'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '@/lib/site'
import { Logo } from './logo'
import { WhatsAppButton } from './ui'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" aria-label="LotePlay, voltar ao início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton className="hidden px-5 py-2.5 text-sm sm:inline-flex sm:text-sm">
            Falar no WhatsApp
          </WhatsAppButton>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full text-navy hover:bg-secondary lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="animate-in fade-in slide-in-from-top-2 border-t border-border bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-4 w-full">Falar no WhatsApp</WhatsAppButton>
        </nav>
      )}
    </header>
  )
}
