export function formatDateByYear(date: string) {
  return new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(
    new Date(date)
  );
}
