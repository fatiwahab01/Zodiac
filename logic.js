export function zodiacPositiveFlow(month, day) {
  if ((month === 8 && day >= 23) || (month === 9 && day <= 21)) return "Libra";
}

export function zodiacNegativeFlow(month, day) {
  if ((month === 8 && day >= 23) || (month === 9 && day <= 21)) {
    return "Libra";
  }
  return "Unknown";
}
