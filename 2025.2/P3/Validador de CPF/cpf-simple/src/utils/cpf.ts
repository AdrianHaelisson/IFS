export function onlyDigits(s: string): string {
  return s.replace(/\D/g, "");
}

function isRepeated(d: string): boolean {
  return /^(\d)\1{10}$/.test(d);
}

function verifier(digits: string, startFactor: number): number {
  let sum = 0;
  let f = startFactor;
  for (const ch of digits) {
    sum += Number(ch) * f--;
  }
  const mod = (sum * 10) % 11;
  return mod === 10 ? 0 : mod;
}
export function isValidCPF(input: string): boolean {
  const d = onlyDigits(input);
  if (d.length !== 11) return false;
  if (isRepeated(d)) return false;
  const base = d.slice(0, 9);
  const d1 = verifier(base, 10);
  const d2 = verifier(base + d1, 11);
  return d.endsWith(`${d1}${d2}`);
}
export function formatCPF(input: string): string {
  const d = onlyDigits(input);
  if (d.length !== 11) return d;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9, 11)}`;
}
