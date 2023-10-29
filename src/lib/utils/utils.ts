type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en-UK') {
  return new Intl.DateTimeFormat(locales, { dateStyle }).format(new Date(date));
}

export function mapRange(
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
