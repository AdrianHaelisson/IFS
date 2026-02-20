import { useState, useEffect } from "react";
import api from "../api";
import Pedido from "../components/Pedido";
export default function Pedidos() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    async function getPedidos() {
      try {
        const response = await api.get("/carts/user/" + usuarioLogado.id);
        setPedidos(response.data.carts);
      } catch (error) {
        alert("Erro ao tentar recuperar os pedidos");
      }
    }
    getPedidos();
  }, []);
  return (
    <main>
      <h1>Pedidos</h1>
      {pedidos.length > 0 ? (
        pedidos.map((pedido) => <Pedido pedido={pedido} key={pedido.id} />)
      ) : (
        <p>Você ainda não efetuou nenhum pedido.</p>
      )}
    </main>
  );
}
