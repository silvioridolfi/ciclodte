export type Category = 'Pila/batería' | 'Equipamiento tecnológico'
export type Status = 'Validado' | 'Pendiente' | 'Entregado'

export type RecordItem = {
  id: string
  institution: string
  district: string
  category: Category
  material: string
  amount: string
  date: string
  status: Status
  destination: string
}

export const initialRecords: RecordItem[] = [
  { id: 'PIL-0248', institution: 'EEST N.º 3', district: 'La Plata', category: 'Pila/batería', material: 'Pilas AA / AAA', amount: '18,4 kg', date: '28 ago 2026', status: 'Validado', destination: 'Chau Pilas' },
  { id: 'PIL-0247', institution: 'Escuela Primaria N.º 12', district: 'Berisso', category: 'Pila/batería', material: 'Baterías mixtas', amount: '6,2 kg', date: '27 ago 2026', status: 'Pendiente', destination: 'Chau Pilas' },
  { id: 'PIL-0246', institution: 'EES N.º 8', district: 'Ensenada', category: 'Pila/batería', material: 'Pilas botón', amount: '2,8 kg', date: '26 ago 2026', status: 'Entregado', destination: 'Chau Pilas' },
  { id: 'PIL-0245', institution: 'Jardín N.º 914', district: 'La Plata', category: 'Pila/batería', material: 'Pilas AA / AAA', amount: '9,7 kg', date: '25 ago 2026', status: 'Validado', destination: 'Chau Pilas' },
  { id: 'TEC-0001', institution: 'EEST N.º 6', district: 'Brandsen', category: 'Equipamiento tecnológico', material: 'Notebook', amount: '1 unidad', date: '23 ago 2026', status: 'Pendiente', destination: 'EKOA' },
]

// Cada sección todavía no implementada muestra una descripción propia de lo
// que va a incluir -- en vez de un placeholder genérico igual para todas.
export const sectionPreviews: Record<string, string> = {
  Registros: 'Historial completo de recepciones, con filtros avanzados, búsqueda por institución y exportación a Excel.',
  Instituciones: 'Listado de escuelas participantes: estado de adhesión, contacto de referencia y volumen histórico entregado.',
  Entregas: 'Calendario de retiros y entregas a Chau Pilas y EKOA, con seguimiento de logística.',
  Protocolos: 'Guías de manejo seguro de pilas, baterías y equipamiento, descargables en PDF.',
  Configuración: 'Roles de usuario, notificaciones y preferencias del panel operativo.',
}
