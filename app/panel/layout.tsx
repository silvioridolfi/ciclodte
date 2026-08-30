import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ciclo DTE | Panel operativo',
  description: 'Panel de gestión para la recolección y entrega responsable de materiales tecnológicos.',
}

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return children
}
