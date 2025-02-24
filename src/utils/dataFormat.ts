export function formatDateByYear(date: string | null | undefined) {
  if (!date || typeof date === 'undefined') return null
  return new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date(date))
}

export function formatMovieRunTime(runtime: number) {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  return `${hours}h ${minutes}m`
}

export function formatMoneyValues(valor: number): string {
  if (valor >= 1_000_000) {
    return (valor / 1_000_000).toLocaleString('en-US', { maximumFractionDigits: 0 }) + 'M'
  } else if (valor >= 1_000) {
    return (valor / 1_000).toLocaleString('en-US', { maximumFractionDigits: 0 }) + 'K'
  } else {
    return '$' + valor.toLocaleString('en-US')
  }
}
