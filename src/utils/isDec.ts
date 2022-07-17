export function isDec(value: string): boolean {
  const isDecimal = /^[0-9]+$/.test(value);
  return isDecimal;
}
