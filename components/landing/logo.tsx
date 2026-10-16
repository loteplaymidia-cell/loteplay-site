import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg viewBox="0 0 40 40" className="size-8 shrink-0" aria-hidden="true">
        <path d="M5 5.5a3.5 3.5 0 0 1 4.9-3.2l9.6 4.2A3 3 0 0 1 18.3 12H8.5A3.5 3.5 0 0 1 5 8.5Z" className="fill-primary" />
        <rect x="5" y="15" width="30" height="10" rx="5" className="fill-primary" />
        <path
          d="M5 31.5A3.5 3.5 0 0 1 8.5 28h9.8a3 3 0 0 1 1.2 5.6l-9.6 4.5A3.5 3.5 0 0 1 5 34.9Z"
          className={inverted ? 'fill-white' : 'fill-navy'}
        />
      </svg>
      <span className="font-heading text-2xl font-extrabold tracking-tight">
        <span className={inverted ? 'text-white' : 'text-navy'}>Lote</span>
        <span className="text-primary">Play</span>
      </span>
    </span>
  )
}
