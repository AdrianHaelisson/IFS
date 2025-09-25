import { soma, media } from "./utils/math.js";
import {
  catalogo,
  listarNomesProdutos,
  filtrarPorPrecoMaximo,
  totalDoCatalogo
} from "./data/catalogo.js";
import { Pedido, StatusPedido } from "./dominio/pedido.js";

// 1) Boas-vindas (função simples)
function saudarCliente(nome: string): string {
  // mensagem personalizada
  return `Olá, ${nome}! Bem-vindo ao Tonhão Lanches.`;
}

// Demonstração do fluxo
console.log(saudarCliente("Ana"));

// 2) Teste de funções utilitárias
console.log("soma(2,3) =", soma(2, 3));
console.log("media([10,20,30]) =", media([10, 20, 30]));

// 3) Mostrar catálogo e utilitários de array/objeto
console.log("Produtos:", listarNomesProdutos(catalogo));
console.log("Até R$ 10:", filtrarPorPrecoMaximo(catalogo, 10));
console.log("Total do catálogo:", totalDoCatalogo(catalogo));

// 4) Simular um pedido
const pedido = new Pedido();
pedido.adicionarItem({ produtoId: 1, nome: "X-Burger", preco: 18.5, quantidade: 2 });
pedido.adicionarItem({ produtoId: 4, nome: "Refrigerante Lata", preco: 6.5, quantidade: 1 });

// Mostrar itens e total
console.log("Itens do pedido:", pedido.itens());
console.log("Total do pedido:", pedido.total());

// 5) Avançar status do pedido
console.log("Status:", StatusPedido[pedido.getStatus()]);
pedido.avancar();
console.log("Status:", StatusPedido[pedido.getStatus()]);
pedido.avancar();
console.log("Status:", StatusPedido[pedido.getStatus()]);
pedido.avancar();
console.log("Status final:", StatusPedido[pedido.getStatus()]);
