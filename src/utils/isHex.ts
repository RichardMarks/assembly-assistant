export function isHex(value: string): boolean {
  const isHexWithPrefix = /^0x[0-9a-fA-F]+$/.test(value);
  const isHexWithoutPrefix = /^[0-9a-fA-F]+$/.test(value);
  return isHexWithPrefix || isHexWithoutPrefix;
}
