import { Camera, Scissors, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  { icon: Camera, label: 'Captação' },
  { icon: Scissors, label: 'Edição' },
  { icon: Send, label: 'Publicação' },
]

export function ProcessDecor({ side = 'left', className }: { side?: 'left' | 'right'; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute top-1/2 hidden -translate-y-1/2 flex-col items-center xl:flex',
        side === 'left' ? 'left-8 2xl:left-16' : 'right-8 2xl:right-16',
        className,
      )}
    >
      {items.map((item, index) => (
        <div key={item.label} className="flex flex-col items-center">
          {index > 0 && <span className="h-14 w-px border-l-2 border-dashed border-primary/25" />}
          <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-white/80 text-primary/70 shadow-sm">
            <item.icon className="size-5" />
          </span>
          <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/50">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export function SoftShapes({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <span className="absolute -left-24 top-16 h-20 w-72 -rotate-[20deg] rounded-full bg-primary/5" />
      <span className="absolute -right-24 bottom-16 h-20 w-72 -rotate-[20deg] rounded-full bg-primary/5" />
    </div>
  )
}
