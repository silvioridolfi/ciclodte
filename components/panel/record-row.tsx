import type { RecordItem, Status } from '@/lib/records'

const statusStyles: Record<Status, string> = {
  Validado: 'border border-status-info/30 bg-status-info/10 text-status-info',
  Pendiente: 'border border-status-warning/30 bg-status-warning/10 text-status-warning',
  Entregado: 'border border-status-success/30 bg-status-success/10 text-status-success',
}

export function RecordRow({ record }: { record: RecordItem }) {
  return (
    <tr className="hover:bg-muted/30">
      <td className="px-5 py-4 text-xs font-bold text-primary">{record.id}</td>
      <td className="px-5 py-4 text-sm font-semibold">
        {record.institution}
        <span className="block text-xs font-normal text-muted-foreground">{record.district}</span>
      </td>
      <td className="px-5 py-4 text-xs">{record.category}</td>
      <td className="px-5 py-4 text-xs">{record.material}</td>
      <td className="px-5 py-4 text-xs font-semibold text-secondary-foreground">{record.destination}</td>
      <td className="px-5 py-4 text-sm font-semibold">{record.amount}</td>
      <td className="px-5 py-4">
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${statusStyles[record.status]}`}>
          {record.status}
        </span>
      </td>
    </tr>
  )
}
