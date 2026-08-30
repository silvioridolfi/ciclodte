'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Battery,
  BatteryWarning,
  Check,
  GraduationCap,
  Handshake,
  Laptop,
  Leaf,
  MonitorX,
  Recycle,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'
import { BatteryMark } from '@/components/battery-mark'

const CTA_HREF = 'mailto:participacion@dte.gba.gob.ar?subject=Quiero%20que%20mi%20escuela%20participe'
const CTA_FED_HREF = 'mailto:participacion@dte.gba.gob.ar?subject=Quiero%20hablar%20con%20mi%20FED%20de%20Regi%C3%B3n%201'

const navLinks = [
  { label: 'El problema', href: '#el-problema' },
  { label: 'La propuesta', href: '#la-propuesta' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Aliados', href: '#aliados' },
]

const problemCards = [
  {
    icon: Wrench,
    title: 'Pilas retiradas en intervenciones',
    text: 'El equipo territorial reemplaza una pila agotada o retira un dispositivo con batería deteriorada — y no siempre sabe qué hacer con eso.',
  },
  {
    icon: BatteryWarning,
    title: 'Pilas acumuladas en la escuela',
    text: 'Las instituciones juntan pilas usadas de distintos aparatos y consultan al equipo territorial, sin que exista un mecanismo definido.',
  },
  {
    icon: MonitorX,
    title: 'Equipamiento fuera de uso',
    text: 'Computadoras, tablets, routers y periféricos que ya no funcionan quedan guardados, perdiendo valor que podría recuperarse.',
  },
]

const circuits = [
  {
    number: '01',
    title: 'Pilas y baterías',
    partners: 'DTE + escuelas + Municipalidad de La Plata',
    text: 'Se articula con el programa municipal "Chau Pilas" para dar destino a las pilas retiradas en intervenciones y a las acumuladas en las instituciones.',
    icon: Battery,
    tone: 'border-primary',
  },
  {
    number: '02',
    title: 'Equipamiento tecnológico',
    partners: 'DTE + escuelas + UNLP / EKOA',
    text: 'Notebooks, tablets, celulares y routers en desuso se evalúan para reparación, reutilización o recuperación de componentes.',
    icon: Laptop,
    tone: 'border-accent',
  },
  {
    number: '03',
    title: 'Dimensión pedagógica',
    partners: 'DTE + docentes + Clubes de Tecnología + familias',
    text: 'Los estudiantes identifican, recolectan, registran y difunden — convirtiendo la gestión ambiental en un proyecto propio.',
    icon: GraduationCap,
    tone: 'border-secondary',
  },
]

const stages = [
  {
    status: 'En marcha',
    title: 'Pilas y baterías',
    icon: Battery,
    flow: 'Escuela → recolección diferenciada → almacenamiento temporal → entrega a "Chau Pilas"',
    steps: [
      'Se registra el stock inicial de pilas y baterías',
      'Se capacita a un referente institucional',
      'Se implementa una campaña educativa con los chicos',
      'Se realiza la primera entrega formal al circuito municipal',
    ],
    active: true,
  },
  {
    status: 'Próximamente',
    title: 'Equipamiento tecnológico',
    icon: Laptop,
    flow: 'Escuela → identificación del equipo → evaluación → derivación a EKOA',
    steps: [
      'Se identifican dispositivos fuera de uso en la institución',
      'Se evalúa si pueden repararse, reutilizarse o recuperarse',
      'Se coordina la entrega con la UNLP a través de EKOA',
      'El equipo puede volver a la comunidad educativa',
    ],
    active: false,
  },
]

const studentItems = [
  'Identifican qué dispositivos de la escuela usan pilas o baterías',
  'Participan de campañas de recolección dentro de la institución',
  'Registran la cantidad de materiales recuperados',
  'Difunden la iniciativa entre sus familias y la comunidad',
  'Conocen el destino real que va a tener lo que recolectaron',
  'Reflexionan sobre sus propios hábitos de consumo tecnológico',
  'Trabajan contenidos de ciudadanía digital y educación ambiental',
  'Se suman los Clubes de Tecnología como espacio natural del proyecto',
]

const allies = [
  {
    badge: 'Coordinación',
    name: 'Dirección de Tecnología Educativa',
    text: 'Articula el circuito, acompaña a los equipos territoriales, genera materiales de orientación y sostiene la dimensión pedagógica.',
    logoIcon: BatteryMark,
    logoBg: 'bg-primary',
  },
  {
    badge: 'Recepción de pilas',
    name: 'Municipalidad de La Plata — "Chau Pilas"',
    text: 'Recibe y gestiona pilas y baterías usadas en el Centro Administrativo Municipal y otros puntos de la ciudad.',
    logoSrc: '/logo-municipalidad-la-plata.svg',
    logoBg: 'bg-[#417099]',
  },
  {
    badge: 'Segunda etapa',
    name: 'Universidad Nacional de La Plata — EKOA',
    text: 'Recibe equipamiento informático en desuso para reparación, reutilización, donación o desmantelamiento responsable.',
    logoSrc: '/logo-unlp.svg',
    logoBg: 'bg-[#2c4a63]',
  },
]

const numbers = [
  { value: '3', label: 'Instituciones articuladas' },
  { value: '2', label: 'Circuitos de materiales' },
  { value: '5', label: 'Distritos de la Región 1' },
  { value: '0', label: 'Estructura nueva que crear desde cero' },
]

export default function EscuelasPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <BatteryMark className="size-6" />
            </span>
            <span>
              <span className="block font-bold leading-tight">Ciclo DTE</span>
              <span className="block text-xs font-medium text-muted-foreground">
                Dirección de Tecnología Educativa · Región 1
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación de secciones">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-foreground/80 transition hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/panel" className="hidden text-xs font-semibold text-muted-foreground transition hover:text-primary sm:inline">
              Acceso al panel
            </Link>
            <Link
              href={CTA_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Sumar mi institución
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_.9fr] md:items-center md:px-8 md:pb-28 md:pt-20">
        <div className="relative z-10">
          <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-primary">
            <span className="size-2 rounded-full bg-accent" /> Ciclo DTE · Piloto 2026 · Región 1
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Lo que sobra de la tecnología puede enseñar tanto como lo que enseñamos con ella.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
            Ciclo DTE es la propuesta de la Dirección de Tecnología Educativa para que cada escuela tenga un destino
            claro para las pilas, baterías y equipamiento fuera de uso — y convierta esa gestión en una experiencia
            educativa real, con impacto ambiental medible.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={CTA_HREF}
              className="inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Quiero que mi escuela participe <ArrowRight className="size-5" />
            </Link>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 font-bold text-foreground transition hover:border-primary hover:text-primary"
            >
              Ver cómo funciona ↓
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Handshake className="size-4 shrink-0 text-primary" />
            Articulación entre DTE, Municipalidad de La Plata ("Chau Pilas") y UNLP (EKOA)
          </p>
        </div>
        <div className="relative flex min-h-[320px] items-center justify-center md:min-h-[410px]">
          <div className="absolute size-72 rounded-full border-[22px] border-secondary md:size-96" />
          <div className="absolute size-56 rounded-full border-[18px] border-accent/25 md:size-72" />
          <div className="relative flex size-44 flex-col items-center justify-center rounded-[2rem] bg-primary text-center text-primary-foreground shadow-2xl shadow-primary/30 md:size-56">
            <Recycle className="mb-3 size-12" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Ciclo
              <br />
              responsable
            </span>
          </div>
          <Leaf className="absolute right-8 top-10 size-10 -rotate-12 text-accent md:right-14" />
          <GraduationCap className="absolute bottom-12 left-5 size-11 rotate-12 text-primary md:left-10" />
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section id="el-problema" className="scroll-mt-24 bg-card px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-accent">La situación hoy</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              Un problema que ya conocés, aunque nadie lo haya nombrado del todo
            </h2>
            <p className="mt-4 text-lg leading-7 text-muted-foreground">
              Durante las intervenciones técnicas y en el día a día escolar, aparece siempre la misma pregunta sin
              una respuesta institucional clara.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {problemCards.map((card) => {
              const Icon = card.icon
              return (
                <article key={card.title} className="rounded-2xl border border-border bg-background p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.text}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-8 rounded-2xl border-0 border-l-4 border-primary bg-background p-7 shadow-[0_12px_28px_rgba(63,125,92,0.12)]">
            <p className="text-lg font-semibold leading-8 text-balance">
              ¿Qué hacemos con las pilas y baterías que quedan como consecuencia de nuestras intervenciones y del uso
              cotidiano de la tecnología en las escuelas?
            </p>
          </div>
        </div>
      </section>

      {/* LA PROPUESTA */}
      <section id="la-propuesta" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">La propuesta</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Ciclo DTE: tres circuitos, un mismo objetivo
          </h2>
          <p className="mt-4 text-lg leading-7 text-muted-foreground">
            Ciclo DTE coordina una articulación tripartita para que cada tipo de material tenga un camino claro — y
            cada escuela, un rol activo.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {circuits.map((circuit) => {
            const Icon = circuit.icon
            return (
              <article
                key={circuit.number}
                className={`rounded-2xl border-0 border-t-4 ${circuit.tone} bg-card p-7 shadow-[0_12px_28px_rgba(63,125,92,0.12)]`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                    <Icon className="size-7" />
                  </span>
                  <span className="text-3xl font-extrabold text-primary/25">{circuit.number}</span>
                </div>
                <h3 className="mt-7 text-2xl font-bold">{circuit.title}</h3>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-primary">{circuit.partners}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{circuit.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="scroll-mt-24 bg-secondary px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Implementación</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              Se construye por etapas, para no exigirle a tu escuela más de lo necesario
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {stages.map((stage) => {
              const Icon = stage.icon
              return (
                <article key={stage.title} className="rounded-2xl bg-card p-7 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide ${
                        stage.active ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                      }`}
                    >
                      {stage.status}
                    </span>
                    <Icon className={`size-6 ${stage.active ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">{stage.title}</h3>
                  <p className="mt-3 rounded-lg bg-muted/60 p-3 text-xs font-medium leading-5 text-muted-foreground">
                    {stage.flow}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {stage.steps.map((step) => (
                      <li key={step} className="flex items-start gap-2.5 text-sm leading-6">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* EL CAMBIO DE LÓGICA */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-accent">El cambio de lógica</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">De comprar y tirar, a cuidar y volver a usar</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-destructive">Lógica actual</p>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-lg font-bold">
              {['Comprar', 'Usar', 'Descartar'].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  {step}
                  {i < arr.length - 1 && <ArrowRight className="size-4 text-destructive/50" />}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Lo que proponemos</p>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-lg font-bold">
              {['Usar', 'Cuidar', 'Reparar', 'Reutilizar', 'Recuperar'].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  {step}
                  {i < arr.length - 1 && <ArrowRight className="size-4 text-primary/50" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPACIÓN ESTUDIANTIL */}
      <section className="bg-card px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Tus estudiantes, protagonistas</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              No son receptores de una campaña. Son parte de cómo funciona.
            </h2>
            <p className="mt-4 text-lg leading-7 text-muted-foreground">
              El sentido de pertenencia aparece cuando ven que lo que juntaron con sus manos entra de verdad a un
              circuito de gestión — no se queda en un gesto simbólico.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {studentItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background p-5">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALIADOS */}
      <section id="aliados" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="flex items-center gap-3">
          <Users className="size-6 text-primary" />
          <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Articulación interinstitucional</p>
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">La escuela no está sola en esto</h2>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-muted-foreground">
          Cada institución aporta lo que ya sabe hacer bien — nadie tiene que crear un sistema desde cero.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {allies.map((ally) => {
            const LogoIcon = ally.logoIcon
            return (
              <article key={ally.name} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <span className={`flex size-14 items-center justify-center rounded-xl p-2.5 text-white ${ally.logoBg}`}>
                  {ally.logoSrc ? (
                    <img src={ally.logoSrc} alt={ally.name} className="h-full w-full object-contain" />
                  ) : LogoIcon ? (
                    <LogoIcon className="size-7" />
                  ) : null}
                </span>
                <span className="mt-5 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                  {ally.badge}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug">{ally.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{ally.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* FRANJA DE NÚMEROS */}
      <section className="bg-secondary px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-6 text-primary" />
            <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">El impacto se construye entre todos</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((item) => (
              <article key={item.label} className="rounded-2xl bg-card p-7 shadow-sm">
                <p className="text-4xl font-extrabold text-primary md:text-5xl">{item.value}</p>
                <p className="mt-3 text-sm font-semibold text-muted-foreground">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-5 py-24 text-center md:px-8 md:py-32">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Users className="size-7" />
          </div>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Tu escuela también puede ser parte de Ciclo DTE
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
            Sumarse implica un compromiso simple: un referente institucional, un rincón para acopiar pilas y las
            ganas de que los chicos sean protagonistas de algo real.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={CTA_HREF}
              className="inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Quiero sumar mi institución <ArrowRight className="size-5" />
            </Link>
            <Link
              href={CTA_FED_HREF}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 font-bold text-foreground transition hover:border-primary hover:text-primary"
            >
              Hablar con mi FED de Región 1
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[linear-gradient(110deg,#E81F76,#417099_55%,#00AEC3)] px-5 py-10 text-primary-foreground md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <BatteryMark />
          <img
            src="/logo-dte-v2.svg"
            alt="Dirección de Tecnología Educativa · Gobierno de la Provincia de Buenos Aires"
            className="h-auto w-1/2 min-w-[260px]"
          />
          <p className="text-sm text-primary-foreground/80">Ciclo DTE · Gestión responsable</p>
          <div className="flex flex-col items-center gap-3 border-t border-primary-foreground/20 pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/70">
              En articulación con
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <img src="/logo-municipalidad-la-plata.svg" alt="Municipalidad de La Plata" className="h-7 w-auto sm:h-8" />
              <img src="/logo-unlp.svg" alt="Universidad Nacional de La Plata" className="h-9 w-auto sm:h-10" />
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center gap-2 border-t border-primary-foreground/20 pt-5">
            <p className="rounded-full border border-dashed border-primary-foreground/40 bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
              Versión demo
            </p>
            <p className="text-xs text-primary-foreground/70">
              © {new Date().getFullYear()} Dirección de Tecnología Educativa (DTE), Región 1 · Desarrollado por Silvio
              Ridolfi, Facilitador de Educación Digital
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
