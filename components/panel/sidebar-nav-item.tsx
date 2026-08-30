import type { LucideIcon } from 'lucide-react'

export function SidebarNavItem({
  label,
  icon: Icon,
  isActive,
  onClick,
}: {
  label: string
  icon: LucideIcon
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg border-l-[3px] px-3 py-3 text-left text-sm font-medium transition-colors ${
        isActive
          ? 'border-accent bg-white/15 text-white'
          : 'border-transparent text-sidebar-foreground/80 hover:border-accent/50 hover:bg-white/10 hover:text-white'
      }`}
    >
      <Icon className="size-[18px] text-sidebar-foreground" />
      {label}
    </button>
  )
}
