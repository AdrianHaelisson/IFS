export const catalogo = [
  { id: 1, nome: "X-Burger", preco: 18.5 },
  { id: 2, nome: "X-Salada", preco: 19.9 },
  { id: 3, nome: "Batata Média", preco: 9.9 },
  { id: 4, nome: "Refrigerante Lata", preco: 6.5 }
];

// Funções utilitárias do catálogo (exercitam arrays/objetos)
export function listarNomesProdutos(
  produtos: { id: number; nome: string; preco: number }[]
): string[] {
  // TODO: retorne um array com apenas os nomes
  return produtos.map((produto => produto.nome))
}

export function filtrarPorPrecoMaximo(
  produtos: { id: number; nome: string; preco: number }[],
  max: number
) {
  // TODO: retorne apenas produtos com preco <= max
  return produtos.filter(produto => produto.preco <= max)
}

export function totalDoCatalogo(
  produtos: { id: number; nome: string; preco: number }[]
): number {
  // TODO: some todos os preços
  const total = produtos.reduce((total, produto) => total += produto.preco, 0)
  return total
}
