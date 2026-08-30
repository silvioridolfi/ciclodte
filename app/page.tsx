'use client'

import Link from 'next/link'
import { ArrowRight, Battery, ClipboardCheck, GraduationCap, Leaf, Laptop, PackageCheck, Recycle, Route, ShieldCheck, Truck, Users } from 'lucide-react'

const CTA_HREF = 'mailto:participacion@dte.gba.gob.ar?subject=Quiero%20que%20mi%20escuela%20participe'

const steps = [
  { number: '01', title: 'Identificá el material', text: 'Pilas, baterías o equipamiento tecnológico en desuso.', icon: PackageCheck },
  { number: '02', title: 'Registralo en el sistema', text: 'Dejá asentada la información para ordenar el circuito.', icon: ClipboardCheck },
  { number: '03', title: 'Coordinamos la entrega', text: 'Definimos el retiro o el punto de entrega más conveniente.', icon: Truck },
  { number: '04', title: 'Seguimos el recorrido', text: 'Acompañamos el proceso hasta la disposición final.', icon: Route },
]

const circuits = [
  { title: 'Pilas y baterías', badge: 'Fase activa · Piloto', destination: 'Chau Pilas · Municipalidad de La Plata', icon: Battery, tone: 'border-primary' },
  { title: 'Equipamiento tecnológico', badge: 'Próximamente · En diseño', destination: 'Destino previsto: EKOA · UNLP', icon: Laptop, tone: 'border-accent' },
]

const impact = [
  { value: '86', label: 'Instituciones participantes' },
  { value: '1.248,6 kg', label: 'Material recuperado' },
  { value: '24', label: 'Entregas realizadas' },
]

function BatteryMark() {
  return <svg viewBox="0 0 80 104" className="size-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="10" y="14" width="56" height="90" rx="10" stroke="currentColor" strokeWidth="7" /><rect x="30" y="2" width="16" height="14" rx="3" fill="currentColor" /><path d="M38 30 24 62h12l-6 30 24-38H40l8-24Z" fill="currentColor" /></svg>
}

export default function EscuelasPage() {
  return <main className="min-h-screen overflow-hidden bg-background text-foreground">
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
      <Link href="/" className="flex items-center gap-3 font-bold"><span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><BatteryMark /></span><span>Ciclo DTE</span></Link>
      <Link href="/panel" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">Acceso al panel <ArrowRight className="size-4" /></Link>
    </header>

    <section className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_.9fr] md:items-center md:px-8 md:pb-28 md:pt-24">
      <div className="relative z-10"><p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-primary"><span className="size-2 rounded-full bg-accent" /> Dirección de Tecnología Educativa</p><h1 className="max-w-3xl text-balance text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl">Tu escuela también puede ser parte del circuito.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Ciclo DTE es la herramienta de la DTE para gestionar de forma responsable pilas, baterías y equipamiento tecnológico en las escuelas.</p><Link href={CTA_HREF} className="mt-9 inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90">Quiero que mi escuela participe <ArrowRight className="size-5" /></Link></div>
      <div className="relative flex min-h-[320px] items-center justify-center md:min-h-[410px]"><div className="absolute size-72 rounded-full border-[22px] border-secondary md:size-96" /><div className="absolute size-56 rounded-full border-[18px] border-accent/25 md:size-72" /><div className="relative flex size-44 flex-col items-center justify-center rounded-[2rem] bg-primary text-center text-primary-foreground shadow-2xl shadow-primary/30 md:size-56"><Recycle className="mb-3 size-12" /><span className="text-sm font-bold uppercase tracking-widest">Ciclo<br />responsable</span></div><Leaf className="absolute right-8 top-10 size-10 -rotate-12 text-accent md:right-14" /><GraduationCap className="absolute bottom-12 left-5 size-11 rotate-12 text-primary md:left-10" /></div>
    </section>

    <section className="bg-card px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-accent">Un circuito simple</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Cómo funciona</h2><p className="mt-4 text-lg leading-7 text-muted-foreground">Una forma clara de transformar una acción cotidiana en aprendizaje y responsabilidad colectiva.</p></div><div className="mt-12 grid gap-4 md:grid-cols-4">{steps.map((step) => { const Icon = step.icon; return <article key={step.number} className="rounded-2xl border border-border bg-background p-6"><div className="flex items-center justify-between"><span className="text-3xl font-extrabold text-primary/25">{step.number}</span><span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"><Icon className="size-5" /></span></div><h3 className="mt-8 text-lg font-bold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p></article> })}</div></div></section>

    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Dos caminos, un propósito</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Dos circuitos, un mismo objetivo</h2></div><p className="max-w-md text-muted-foreground">Cada material encuentra el recorrido adecuado, con la escuela como punto de partida.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2">{circuits.map((circuit) => { const Icon = circuit.icon; return <article key={circuit.title} className={`rounded-2xl border-0 border-t-4 ${circuit.tone} bg-card p-7 shadow-[0_12px_28px_rgba(63,125,92,0.12)]`}><div className="flex items-start justify-between gap-4"><div className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground"><Icon className="size-7" /></div><span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground">{circuit.badge}</span></div><h3 className="mt-7 text-2xl font-bold">{circuit.title}</h3><p className="mt-3 text-sm text-muted-foreground">Destino</p><p className="mt-1 font-semibold">{circuit.destination}</p></article> })}</div></section>

    <section className="bg-secondary px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-6xl"><div className="flex items-center gap-3"><ShieldCheck className="size-6 text-primary" /><p className="text-sm font-bold uppercase tracking-[.16em] text-primary">El impacto se construye entre todos</p></div><h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Impacto hasta ahora</h2><div className="mt-12 grid gap-4 md:grid-cols-3">{impact.map((item) => <article key={item.label} className="rounded-2xl bg-card p-7 shadow-sm"><p className="text-4xl font-extrabold text-primary md:text-5xl">{item.value}</p><p className="mt-3 text-sm font-semibold text-muted-foreground">{item.label}</p></article>)}</div></div></section>

    <section className="px-5 py-24 text-center md:px-8 md:py-32"><div className="mx-auto max-w-2xl"><div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Users className="size-7" /></div><h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">¿Nos sumamos?</h2><p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-muted-foreground">Tu escuela puede iniciar el circuito y ser parte de una gestión tecnológica más responsable.</p><Link href={CTA_HREF} className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90">Quiero que mi escuela participe <ArrowRight className="size-5" /></Link></div></section>

    <footer className="bg-[linear-gradient(110deg,#E81F76,#417099_55%,#00AEC3)] px-5 py-14 text-primary-foreground md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <BatteryMark />
        <img
          src="/logo-dte-v2.svg"
          alt="Dirección de Tecnología Educativa · Gobierno de la Provincia de Buenos Aires"
          className="h-12 w-auto sm:h-14 md:h-16"
        />
        <p className="text-sm text-primary-foreground/80">Ciclo DTE · Gestión responsable</p>
        <p className="text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Dirección de Tecnología Educativa – Provincia de Buenos Aires. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  </main>
}
