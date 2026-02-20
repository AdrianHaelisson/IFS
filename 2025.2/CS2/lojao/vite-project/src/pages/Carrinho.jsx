import { useState } from "react";
import Item from "../components/Item";

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState(() => {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
  });

  const atualizarCarrinho = (novoCarrinho) => {
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  const alterarQuantidade = (id, delta) => {
    const novoCarrinho = carrinho
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + delta }
          : item,
      )
      .filter((item) => item.quantity > 0);

    atualizarCarrinho(novoCarrinho);
  };

  return (
    <main>
      <h1>Carrinho</h1>
      {carrinho.map((item) => (
        <Item
          item={item}
          key={item.id}
          onIncrease={() => alterarQuantidade(item.id, 1)}
          onDecrease={() => alterarQuantidade(item.id, -1)}
        />
      ))}
      {carrinho.length > 0 ? (
        <p className="text-center bold">
          Total: R${" "}
          {carrinho.reduce(
            (acc, item) => (acc += item.quantity * item.price),
            0,
          )}
        </p>
      ) : (
        <p>Você ainda não adicionou itens ao seu carrinho.</p>
      )}
    </main>
  );
}
