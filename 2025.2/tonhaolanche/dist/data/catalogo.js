export const catalogo = [
    { id: 1, nome: "X-Burger", preco: 18.5 },
    { id: 2, nome: "X-Salada", preco: 19.9 },
    { id: 3, nome: "Batata Média", preco: 9.9 },
    { id: 4, nome: "Refrigerante Lata", preco: 6.5 }
];
// Funções utilitárias do catálogo (exercitam arrays/objetos)
export function listarNomesProdutos(produtos) {
    // TODO: retorne um array com apenas os nomes
    return produtos.map((produto => produto.nome));
}
export function filtrarPorPrecoMaximo(produtos, max) {
    // TODO: retorne apenas produtos com preco <= max
    return produtos.filter(produto => produto.preco <= max);
}
export function totalDoCatalogo(produtos) {
    // TODO: some todos os preços
    const total = produtos.reduce((total, produto) => total += produto.preco, 0);
    return total;
}
