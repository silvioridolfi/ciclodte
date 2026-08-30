export function BatteryMark({ className = 'size-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 104" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="14" width="56" height="90" rx="10" stroke="currentColor" strokeWidth="7" />
      <rect x="30" y="2" width="16" height="14" rx="3" fill="currentColor" />
      <path d="M38 30 24 62h12l-6 30 24-38H40l8-24Z" fill="currentColor" />
    </svg>
  )
}
