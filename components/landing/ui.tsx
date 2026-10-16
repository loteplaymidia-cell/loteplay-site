import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5',
  outline: 'border border-primary/30 bg-white text-primary hover:bg-secondary',
  white: 'bg-white text-primary shadow-lg hover:-translate-y-0.5 hover:bg-secondary',
} as const

export function WhatsAppButton({
  children,
  message,
  variant = 'primary',
  className,
  showIcon = true,
}: {
  children: React.ReactNode
  message?: string
  variant?: keyof typeof variants
  className?: string
  showIcon?: boolean
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-base',
        variants[variant],
        className,
      )}
    >
      {showIcon && <MessageCircle className="size-5" aria-hidden="true" />}
      {children}
    </a>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <p className="mb-3 inline-flex rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}

export function IconBox({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn('flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary', className)}
    >
      {children}
    </span>
  )
}
