import type { LucideIcon } from 'lucide-react'

type StatCardProps = {
  title: string
  value: string
  caption: string
  icon: LucideIcon
  trend?: string
  tone: 'primary' | 'accent' | 'secondary'
}

const toneStyles: Record<StatCardProps['tone'], string> = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/15 text-accent',
  secondary: 'bg-secondary text-secondary-foreground',
}

export function StatCard({ title, value, caption, icon: Icon, trend, tone }: StatCardProps) {
  return (
    <article className="rounded-2xl border-0 bg-card p-5 shadow-[0_12px_28px_rgba(63,125,92,0.12)]">
      <div className="flex items-start justify-between">
        <div className={`flex size-10 items-center justify-center rounded-lg ${toneStyles[tone]}`}>
          <Icon className="size-5" />
        </div>
        {trend && (
          <span className="rounded-full bg-secondary px-2 py-1 text-[11px] font-bold text-secondary-foreground">
            {trend}
          </span>
        )}
      </div>
      <p className="mt-5 text-sm font-medium text-muted-foreground">{title}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
    </article>
  )
}
