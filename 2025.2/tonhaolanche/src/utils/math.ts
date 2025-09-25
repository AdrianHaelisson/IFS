export function soma(a: number, b: number): number {
  // TODO: retornar a soma de a e b
  return a + b 
}

export function media(valores: number[]): number {
  // TODO: calcular média: soma / quantidade (se vazio, retorne 0)
  if (valores.length === 0) return 0;
  const total = valores.reduce((acumulador, n) => acumulador + n, 0);
  return total / valores.length 
}
