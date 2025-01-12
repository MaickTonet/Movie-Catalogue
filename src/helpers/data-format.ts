export function formatDateByYear(date: string | null | undefined) {
  if (!date || typeof date === 'undefined') return null
  return new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date(date))
}
