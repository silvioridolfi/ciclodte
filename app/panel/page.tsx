'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
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
  Truck,
  Users,
  X,
  Laptop,
  Clock3,
  ArrowLeft,
} from 'lucide-react'
import { StatCard } from '@/components/panel/stat-card'
import { SidebarNavItem } from '@/components/panel/sidebar-nav-item'
import { RecordRow } from '@/components/panel/record-row'
import { initialRecords, sectionPreviews, type Category } from '@/lib/records'

const navItems = [
  { label: 'Resumen', icon: LayoutDashboard },
  { label: 'Registros', icon: ClipboardList },
  { label: 'Instituciones', icon: Building2 },
  { label: 'Entregas', icon: Truck },
]

export default function PanelPage() {
  const [records, setRecords] = useState(initialRecords)
  const [activeSection, setActiveSection] = useState('Resumen')
  const [filter, setFilter] = useState('Todos')
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [category, setCategory] = useState<Category>('Pila/batería')
  const [demoNotice, setDemoNotice] = useState(false)

  const destination = category === 'Pila/batería' ? 'Chau Pilas · Municipalidad de La Plata' : 'EKOA · UNLP'

  const filteredRecords = useMemo(
    () =>
      records.filter(
        (r) =>
          (filter === 'Todos' || r.status === filter) &&
          [r.institution, r.district, r.material, r.id, r.category].some((v) =>
            v.toLowerCase().includes(query.toLowerCase()),
          ),
      ),
    [records, filter, query],
  )

  function addRecord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const selectedCategory = String(form.get('category')) as Category
    setRecords((current) => [
      {
        id: `${selectedCategory === 'Pila/batería' ? 'PIL' : 'TEC'}-${String(current.length + 1).padStart(4, '0')}`,
        institution: String(form.get('institution')),
        district: String(form.get('district')),
        category: selectedCategory,
        material: String(form.get('material')),
        amount: `${String(form.get('amount'))} ${selectedCategory === 'Pila/batería' ? 'kg' : 'unidad(es)'}`,
        date: '29 ago 2026',
        status: 'Pendiente',
        destination: selectedCategory === 'Pila/batería' ? 'Chau Pilas' : 'EKOA',
      },
      ...current,
    ])
    setShowForm(false)
    setDemoNotice(true)
    setTimeout(() => setDemoNotice(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <aside
        className={`fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-sidebar-border sidebar-gradient transition-transform md:translate-x-0 ${
          mobileNav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-sidebar-border px-6 py-6">
          <div className="flex justify-end md:hidden">
            <button className="text-sidebar-foreground" aria-label="Cerrar menú" onClick={() => setMobileNav(false)}>
              <X className="size-5 text-sidebar-foreground" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/logo-dte-v3.png" alt="Dirección de Tecnología Educativa" className="h-16 w-auto" />
            <p className="text-xs font-semibold uppercase tracking-wide text-sidebar-foreground/80">Ciclo DTE</p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-6" aria-label="Navegación principal">
          {navItems.map(({ label, icon }) => (
            <SidebarNavItem
              key={label}
              label={label}
              icon={icon}
              isActive={activeSection === label}
              onClick={() => {
                setActiveSection(label)
                setMobileNav(false)
              }}
            />
          ))}
          <div className="mt-8 border-t border-sidebar-border pt-5">
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-sidebar-foreground/60">Soporte</p>
            <SidebarNavItem
              label="Protocolos"
              icon={FileText}
              isActive={activeSection === 'Protocolos'}
              onClick={() => {
                setActiveSection('Protocolos')
                setMobileNav(false)
              }}
            />
            <SidebarNavItem
              label="Configuración"
              icon={Settings2}
              isActive={activeSection === 'Configuración'}
              onClick={() => {
                setActiveSection('Configuración')
                setMobileNav(false)
              }}
            />
          </div>
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <Link
            href="/"
            className="mb-3 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-sidebar-foreground/80 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Ver sitio público
          </Link>
          <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3">
            <Users className="size-4 text-sidebar-foreground" />
            <div>
              <p className="text-xs font-semibold text-sidebar-foreground">Equipo DTE</p>
              <p className="text-[11px] text-sidebar-foreground">Acceso operativo</p>
            </div>
          </div>
          <p className="mt-3 text-center text-[10px] leading-tight text-sidebar-foreground/60">
            © {new Date().getFullYear()} Dirección de Tecnología Educativa – Provincia de Buenos Aires
          </p>
        </div>
      </aside>

      <div className="md:pl-64">
        <header className="flex h-20 items-center justify-between border-b border-border bg-card px-5 md:px-8">
          <div className="flex items-center gap-3">
            <button className="md:hidden" aria-label="Abrir menú" onClick={() => setMobileNav(true)}>
              <Menu className="size-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Panel de gestión</p>
                <span className="rounded-full border border-dashed border-accent/50 bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                  Demo
                </span>
              </div>
              <h1 className="text-xl font-bold">{activeSection}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="size-5 text-muted-foreground" />
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Área de gestión</p>
              <p className="text-xs text-muted-foreground">29 de agosto de 2026</p>
            </div>
          </div>
        </header>

        {demoNotice && (
          <div className="mx-5 mt-4 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent md:mx-8" role="status">
            Registro simulado — esta es una versión demo, los datos no se guardan y se pierden al recargar la página.
          </div>
        )}

        <div className="mx-auto max-w-[1440px] px-5 py-7 md:px-8 md:py-9">
          {activeSection !== 'Resumen' && (
            <div className="flex min-h-[560px] flex-col items-center justify-center gap-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Clock3 className="size-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{activeSection}</h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  {sectionPreviews[activeSection] ?? 'Esta sección se incorporará en una próxima versión.'}
                </p>
              </div>
              <button
                onClick={() => setActiveSection('Resumen')}
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90"
              >
                Volver al resumen
              </button>
            </div>
          )}

          <div className={activeSection !== 'Resumen' ? 'hidden' : ''}>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-sm font-medium text-primary">Ciclo DTE · Agosto 2026</p>
                <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                  Un circuito más claro,
                  <br className="hidden md:block" /> una gestión responsable.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  Seguimiento de la recolección y entrega responsable de materiales tecnológicos en instituciones educativas.
                </p>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                <Plus className="size-4" />
                Nuevo registro
              </button>
            </div>

            <div className="mb-6 grid gap-4 lg:grid-cols-2">
              <section className="rounded-2xl border-0 border-t-4 border-primary bg-card p-5 shadow-[0_12px_28px_rgba(63,125,92,0.12)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Fase activa · Piloto</p>
                    <h3 className="mt-2 text-lg font-bold">Pilas y baterías</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Destino: Chau Pilas · Municipalidad de La Plata</p>
                  </div>
                  <Battery className="size-6 text-primary" />
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#3f7d5c,#6ca47e)]" />
                </div>
                <p className="mt-2 text-xs font-semibold text-primary">72% de avance del ciclo</p>
              </section>
              <section className="rounded-2xl border-0 bg-card p-5 shadow-[0_12px_28px_rgba(63,125,92,0.12)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">Próximamente · En diseño</p>
                    <h3 className="mt-2 text-lg font-bold">Equipamiento tecnológico</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Destino previsto: EKOA · UNLP</p>
                  </div>
                  <Laptop className="size-6 text-accent" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <Clock3 className="size-4" /> Circuito todavía no operativo
                </div>
              </section>
            </div>

            <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicadores principales">
              <StatCard title="Pilas recuperadas" value="1.248,6 kg" caption="Fase activa" trend="+12,4%" icon={Battery} tone="primary" />
              <StatCard title="Instituciones activas" value="86" caption="de 104 registradas" trend="+8" icon={Building2} tone="accent" />
              <StatCard title="Entregas realizadas" value="24" caption="a Chau Pilas" trend="+4" icon={Truck} tone="secondary" />
              <StatCard title="Pendientes de validar" value="12" caption="registros abiertos" icon={ClipboardList} tone="secondary" />
            </section>

            <section className="mb-6 grid gap-6 xl:grid-cols-[1.55fr_1fr]">
              <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">Avance de pilas y baterías</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Material recuperado por semana · fase activa</p>
                  </div>
                  <button className="flex items-center gap-1 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground">
                    Este mes <ChevronDown className="size-3" />
                  </button>
                </div>
                <div className="mt-7 flex items-end gap-4">
                  <p className="text-4xl font-bold">72%</p>
                  <p className="mb-1 text-xs font-semibold text-primary">+9% vs. ciclo anterior</p>
                </div>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#3f7d5c,#6ca47e)]" />
                </div>
                <div className="mt-6 grid grid-cols-5 gap-2 text-center">
                  {[
                    ['Sem 1', '186', 38],
                    ['Sem 2', '254', 52],
                    ['Sem 3', '312', 65],
                    ['Sem 4', '496', 85],
                    ['Meta', '1.700', 100],
                  ].map(([week, kg, heightPct], index) => (
                    <div key={week}>
                      <div className="mx-auto mb-2 flex h-24 items-end justify-center">
                        <div
                          className={`w-7 rounded-t-md ${index === 4 ? 'bg-muted' : 'bg-accent'}`}
                          style={{ height: `${heightPct}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-muted-foreground">{week}</p>
                      <p className="mt-1 text-xs font-bold">{kg} kg</p>
                    </div>
                  ))}
                </div>
              </article>
              <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">Equipamiento tecnológico</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Seguimiento del circuito futuro</p>
                  </div>
                  <span className="rounded-full bg-accent px-2 py-1 text-[11px] font-bold text-accent-foreground">Próximamente</span>
                </div>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-lg bg-muted/60 p-8 text-center">
                  <Laptop className="size-8 text-accent" />
                  <p className="text-sm font-semibold">Sin datos operativos todavía</p>
                  <p className="max-w-xs text-xs leading-5 text-muted-foreground">
                    La fase EKOA se encuentra en diseño y se habilitará cuando el circuito esté validado.
                  </p>
                </div>
              </article>
            </section>

            <section className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex flex-col gap-4 border-b border-border p-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-bold">Registros recientes</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Pilas, baterías y equipamiento cargado en el sistema</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label className="flex h-9 items-center gap-2 rounded-md border border-border px-3">
                    <Search className="size-4 text-muted-foreground" />
                    <span className="sr-only">Buscar registros</span>
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Buscar..."
                      className="w-full bg-transparent text-xs outline-none sm:w-36"
                    />
                  </label>
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="h-9 rounded-md border border-border bg-card px-3 text-xs font-medium"
                  >
                    <option>Todos</option>
                    <option>Validado</option>
                    <option>Pendiente</option>
                    <option>Entregado</option>
                  </select>
                  <button className="flex h-9 items-center justify-center gap-2 rounded-md border border-border px-3 text-xs font-semibold hover:bg-muted">
                    <Download className="size-3.5" />
                    Exportar
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <tr>
                      {['Registro', 'Institución', 'Categoría', 'Material', 'Destino', 'Cantidad', 'Estado'].map((h) => (
                        <th key={h} className="px-5 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredRecords.map((r) => (
                      <RecordRow key={r.id} record={r} />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-foreground/30 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold">Nuevo registro</h2>
                <p className="mt-1 text-sm text-muted-foreground">Cargá una nueva recepción de material.</p>
              </div>
              <button onClick={() => setShowForm(false)} aria-label="Cerrar formulario">
                <X className="size-5" />
              </button>
            </div>
            <form onSubmit={addRecord} className="mt-6 flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Institución
                  <input required name="institution" className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal" placeholder="Nombre de la institución" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Distrito
                  <input required name="district" className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal" placeholder="Distrito" />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Categoría
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal"
                >
                  <option>Pila/batería</option>
                  <option>Equipamiento tecnológico</option>
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Tipo de material
                  <select name="material" className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal">
                    {category === 'Pila/batería' ? (
                      <>
                        <option>Pila común</option>
                        <option>Pila recargable</option>
                        <option>Batería de litio</option>
                      </>
                    ) : (
                      <>
                        <option>Notebook</option>
                        <option>Tablet</option>
                        <option>Celular</option>
                        <option>Componente TIC</option>
                      </>
                    )}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Cantidad / peso
                  <input required min="0" step="0.1" type="number" name="amount" className="h-10 rounded-md border border-input bg-background px-3 text-sm font-normal" placeholder="0,0" />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Destino
                <select name="destination" disabled className="h-10 rounded-md border border-input bg-muted px-3 text-sm font-normal">
                  <option>{destination}</option>
                </select>
                <span className="text-xs font-normal text-muted-foreground">Se asigna automáticamente según la categoría.</span>
              </label>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="rounded-md border border-border px-4 py-2 text-sm font-semibold">
                  Cancelar
                </button>
                <button type="submit" className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                  <Check className="size-4" />
                  Guardar registro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
