'use client'

import { useMemo, useState } from 'react'
import {
  ArrowDownToLine,
  Battery,
  Bell,
  Building2,
  Check,
  ChevronDown,
  ClipboardList,
  Download,
  FileText,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Truck,
  Users,
  X,
} from 'lucide-react'

type Status = 'Validado' | 'Pendiente' | 'Entregado'

type RecordItem = {
  id: string
  institution: string
  district: string
  material: string
  amount: string
  date: string
  status: Status
}

const initialRecords: RecordItem[] = [
  { id: 'PIL-0248', institution: 'EEST N.º 3', district: 'La Plata', material: 'Pilas AA / AAA', amount: '18,4 kg', date: '28 ago 2026', status: 'Validado' },
  { id: 'PIL-0247', institution: 'Escuela Primaria N.º 12', district: 'Berisso', material: 'Baterías mixtas', amount: '6,2 kg', date: '27 ago 2026', status: 'Pendiente' },
  { id: 'PIL-0246', institution: 'EES N.º 8', district: 'Ensenada', material: 'Pilas botón', amount: '2,8 kg', date: '26 ago 2026', status: 'Entregado' },
  { id: 'PIL-0245', institution: 'Jardín N.º 914', district: 'La Plata', material: 'Pilas AA / AAA', amount: '9,7 kg', date: '25 ago 2026', status: 'Validado' },
  { id: 'PIL-0244', institution: 'EEST N.º 6', district: 'Brandsen', material: 'Baterías de litio', amount: '4,1 kg', date: '23 ago 2026', status: 'Pendiente' },
]

const statusStyles: Record<Status, string> = {
  Validado: 'bg-primary/10 text-primary',
  Pendiente: 'bg-accent/15 text-accent-foreground',
  Entregado: 'bg-secondary text-secondary-foreground',
}

export default function Page() {
  const [records, setRecords] = useState(initialRecords)
  const [activeSection, setActiveSection] = useState('Resumen')
  const [filter, setFilter] = useState('Todos')
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const filteredRecords = useMemo(() => records.filter((record) => {
    const matchesFilter = filter === 'Todos' || record.status === filter
    const normalizedQuery = query.toLowerCase()
    return matchesFilter && [record.institution, record.district, record.material, record.id].some((value) => value.toLowerCase().includes(normalizedQuery))
  }), [records, filter, query])

  function addRecord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const newRecord: RecordItem = {
      id: `PIL-${String(249 + records.length - initialRecords.length).padStart(4, '0')}`,
      institution: String(form.get('institution') || 'Nueva institución'),
      district: String(form.get('district') || 'Sin distrito'),
      material: String(form.get('material') || 'Pilas AA / AAA'),
      amount: `${String(form.get('amount') || '0')} kg`,
      date: '29 ago 2026',
      status: 'Pendiente',
    }
    setRecords((current) => [newRecord, ...current])
    setShowForm(false)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <aside className={`fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-border bg-sidebar transition-transform md:translate-x-0 ${mobileNav ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-20 items-center gap-3 border-b border-sidebar-border px-6">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Battery className="size-5" /></div>
          <div><p className="text-sm font-bold leading-tight">Gestión de pilas</p><p className="text-xs text-sidebar-foreground/60">DTE · Buenos Aires</p></div>
          <button className="ml-auto md:hidden" aria-label="Cerrar menú" onClick={() => setMobileNav(false)}><X className="size-5" /></button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3 py-6" aria-label="Navegación principal">
          {[['Resumen', LayoutDashboard], ['Registros', ClipboardList], ['Instituciones', Building2], ['Entregas', Truck]].map(([label, Icon]) => (
            <button key={String(label)} onClick={() => { setActiveSection(String(label)); setMobileNav(false) }} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${activeSection === label ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground/65 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground'}`}><Icon className="size-[18px]" />{label}</button>
          ))}
          <div className="mt-8 border-t border-sidebar-border pt-5"><p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-sidebar-foreground/40">Soporte</p><button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-sidebar-foreground/65 hover:bg-sidebar-accent/60"><FileText className="size-[18px]" />Protocolos</button><button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-sidebar-foreground/65 hover:bg-sidebar-accent/60"><Settings2 className="size-[18px]" />Configuración</button></div>
        </nav>
        <div className="border-t border-sidebar-border p-4"><div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3"><div className="flex size-8 items-center justify-center rounded-full bg-accent/15 text-accent-foreground"><Users className="size-4" /></div><div><p className="text-xs font-semibold">Equipo DTE</p><p className="text-[11px] text-sidebar-foreground/55">Acceso operativo</p></div></div></div>
      </aside>

      <div className="md:pl-64">
        <header className="flex h-20 items-center justify-between border-b border-border bg-card px-5 md:px-8"><div className="flex items-center gap-3"><button className="md:hidden" aria-label="Abrir menú" onClick={() => setMobileNav(true)}><Menu className="size-5" /></button><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Panel de gestión</p><h1 className="text-xl font-bold tracking-tight">{activeSection}</h1></div></div><div className="flex items-center gap-3"><button className="relative rounded-lg p-2 text-muted-foreground hover:bg-muted" aria-label="Notificaciones"><Bell className="size-5" /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary" /></button><div className="hidden h-8 w-px bg-border sm:block" /><div className="hidden text-right sm:block"><p className="text-sm font-semibold">Área de gestión</p><p className="text-xs text-muted-foreground">29 de agosto de 2026</p></div></div></header>

        <div className="mx-auto max-w-[1440px] px-5 py-7 md:px-8 md:py-9">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-sm font-medium text-primary">Ciclo de gestión · Agosto 2026</p><h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">Un circuito más claro,<br className="hidden md:block" /> una gestión responsable.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Seguimiento de la recolección y entrega responsable de pilas y baterías en instituciones educativas.</p></div><button onClick={() => setShowForm(true)} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90"><Plus className="size-4" />Nuevo registro</button></div>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicadores principales">
            {[['Total recuperado', '1.248,6 kg', '+12,4%', Battery, 'Este mes'], ['Instituciones activas', '86', '+8', Building2, 'de 104 registradas'], ['Entregas realizadas', '24', '+4', Truck, 'en el ciclo actual'], ['Pendientes de validar', '12', 'Requieren atención', ClipboardList, 'registros abiertos']].map(([title, value, trend, Icon, caption], index) => <article key={String(title)} className="rounded-xl border border-border bg-card p-5 shadow-sm"><div className="flex items-start justify-between"><div className={`flex size-10 items-center justify-center rounded-lg ${index === 0 ? 'bg-accent/15 text-accent-foreground' : index === 1 ? 'bg-primary/10 text-primary' : index === 2 ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'}`}><Icon className="size-5" /></div>{index < 3 && <span className="rounded-full bg-secondary px-2 py-1 text-[11px] font-bold text-secondary-foreground">{trend}</span>}</div><p className="mt-5 text-sm font-medium text-muted-foreground">{title}</p><p className="mt-1 text-2xl font-bold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted-foreground">{caption}</p></article>)}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_1fr]">
            <article className="rounded-xl border border-border bg-card p-6 shadow-sm"><div className="flex items-start justify-between"><div><h3 className="font-bold">Avance del ciclo</h3><p className="mt-1 text-sm text-muted-foreground">Material recuperado por semana</p></div><button className="flex items-center gap-1 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground">Este mes <ChevronDown className="size-3" /></button></div><div className="mt-7 flex items-end gap-4"><p className="text-4xl font-bold tracking-tight">72%</p><p className="mb-1 text-xs font-semibold text-primary">+9% vs. ciclo anterior</p></div><div className="mt-5 h-3 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: '72%' }} /></div><div className="mt-6 grid grid-cols-5 gap-2 text-center">{[['Sem 1', '186'], ['Sem 2', '254'], ['Sem 3', '312'], ['Sem 4', '496'], ['Meta', '1.700']].map(([week, kg], index) => <div key={week}><div className="mx-auto mb-2 flex h-24 items-end justify-center"><div className={`w-7 rounded-t-md ${index === 4 ? 'bg-muted' : 'bg-accent'}`} style={{ height: `${index === 4 ? 100 : [38, 52, 65, 85][index]}%` }} /></div><p className="text-[11px] font-medium text-muted-foreground">{week}</p><p className="mt-1 text-xs font-bold">{kg} kg</p></div>)}</div></article>
            <article className="rounded-xl border border-border bg-card p-6 shadow-sm"><div className="flex items-start justify-between"><div><h3 className="font-bold">Acciones pendientes</h3><p className="mt-1 text-sm text-muted-foreground">Requieren seguimiento</p></div><span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">4</span></div><div className="mt-5 flex flex-col gap-3">{[['Validar registro', 'Escuela Primaria N.º 12', 'Hoy', 'bg-primary'], ['Coordinar entrega', 'EEST N.º 6 · Brandsen', 'Mañana', 'bg-accent'], ['Actualizar protocolo', 'Baterías de litio', '31 ago', 'bg-secondary-foreground']].map(([title, subtitle, date, color]) => <button key={title} className="flex items-center gap-3 rounded-lg border border-border p-3 text-left hover:bg-muted"><span className={`size-2 shrink-0 rounded-full ${color}`} /><span className="min-w-0 flex-1"><span className="block text-sm font-semibold">{title}</span><span className="block truncate text-xs text-muted-foreground">{subtitle}</span></span><span className="text-[11px] font-semibold text-muted-foreground">{date}</span></button>)}<button className="mt-1 text-center text-xs font-bold text-primary hover:underline">Ver todas las acciones</button></div></article>
          </section>

          <section className="mt-6 rounded-xl border border-border bg-card shadow-sm"><div className="flex flex-col gap-4 border-b border-border p-5 md:flex-row md:items-center md:justify-between"><div><h3 className="font-bold">Registros recientes</h3><p className="mt-1 text-sm text-muted-foreground">Últimos movimientos cargados en el sistema</p></div><div className="flex flex-col gap-2 sm:flex-row"><label className="flex h-9 items-center gap-2 rounded-md border border-border px-3"><Search className="size-4 text-muted-foreground" /><span className="sr-only">Buscar registros</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar..." className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground sm:w-36" /></label><select value={filter} onChange={(event) => setFilter(event.target.value)} className="h-9 rounded-md border border-border bg-card px-3 text-xs font-medium outline-none"><option>Todos</option><option>Validado</option><option>Pendiente</option><option>Entregado</option></select><button className="flex h-9 items-center justify-center gap-2 rounded-md border border-border px-3 text-xs font-semibold hover:bg-muted"><Download className="size-3.5" />Exportar</button></div></div><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left"><thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground"><tr><th className="px-5 py-3 font-semibold">Registro</th><th className="px-5 py-3 font-semibold">Institución</th><th className="px-5 py-3 font-semibold">Material</th><th className="px-5 py-3 font-semibold">Cantidad</th><th className="px-5 py-3 font-semibold">Fecha</th><th className="px-5 py-3 font-semibold">Estado</th></tr></thead><tbody className="divide-y divide-border">{filteredRecords.map((record) => <tr key={record.id} className="hover:bg-muted/30"><td className="px-5 py-4 text-xs font-bold text-primary">{record.id}</td><td className="px-5 py-4"><p className="text-sm font-semibold">{record.institution}</p><p className="text-xs text-muted-foreground">{record.district}</p></td><td className="px-5 py-4 text-sm text-muted-foreground">{record.material}</td><td className="px-5 py-4 text-sm font-semibold">{record.amount}</td><td className="px-5 py-4 text-xs text-muted-foreground">{record.date}</td><td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${statusStyles[record.status]}`}>{record.status}</span></td></tr>)}</tbody></table>{filteredRecords.length === 0 && <div className="p-10 text-center text-sm text-muted-foreground">No hay registros que coincidan con la búsqueda.</div>}</div></section>
        </div>
      </div>

      {showForm && <div className="fixed inset-0 z-30 flex items-center justify-center bg-foreground/30 p-4" role="dialog" aria-modal="true" aria-labelledby="new-record-title"><div className="w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-xl"><div className="flex items-start justify-between"><div><h2 id="new-record-title" className="text-xl font-bold">Nuevo registro</h2><p className="mt-1 text-sm text-muted-foreground">Cargá una nueva recepción de material.</p></div><button onClick={() => setShowForm(false)} aria-label="Cerrar formulario" className="rounded-md p-1 text-muted-foreground hover:bg-muted"><X className="size-5" /></button></div><form onSubmit={addRecord} className="mt-6 flex flex-col gap-4"><div className="grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 text-sm font-semibold">Institución<input required name="institution" className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal outline-none ring-primary focus:ring-2" placeholder="Nombre de la institución" /></label><label className="flex flex-col gap-2 text-sm font-semibold">Distrito<input required name="district" className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal outline-none ring-primary focus:ring-2" placeholder="Distrito" /></label></div><div className="grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 text-sm font-semibold">Material<select name="material" className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal outline-none"><option>Pilas AA / AAA</option><option>Baterías mixtas</option><option>Pilas botón</option><option>Baterías de litio</option></select></label><label className="flex flex-col gap-2 text-sm font-semibold">Cantidad<input required min="0" step="0.1" type="number" name="amount" className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal outline-none ring-primary focus:ring-2" placeholder="0,0" /></label></div><div className="mt-2 flex justify-end gap-3"><button type="button" onClick={() => setShowForm(false)} className="rounded-md px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-muted">Cancelar</button><button type="submit" className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90">Guardar registro</button></div></form></div></div>}
    </main>
  )
}
