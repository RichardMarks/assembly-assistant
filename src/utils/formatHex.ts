export const FMT_8BIT = 1;
export const FMT_16BIT = 2;
export const FMT_32BIT = 4;
export const FMT_64BIT = 8;

export function formatHex(value: number, bytes: number = 1): string {
  return value
    .toString(16)
    .padStart(bytes * 2, '0')
    .match(/[0-9a-f]{2}/g)
    .join(' ');
}
