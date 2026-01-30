import { useState, useEffect, Fragment } from "react";
import api from "../api";
import Produto from "../components/Produto";
export default function Home() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function getProdutos() {
      try {
        const response = await api.get("/products");
        setProdutos(response.data.products);
      } catch (error) {
        alert("Erro ao tentar recuperar os produtos");
      }
    }
    getProdutos();
  }, []);
  const produtosAgrupados = produtos.reduce((acc, produto) => {
    const ultimoGrupo = acc[acc.length - 1];
    if (!ultimoGrupo || ultimoGrupo.categoria !== produto.category) {
      acc.push({ categoria: produto.category, itens: [produto] });
      return acc;
    }
    ultimoGrupo.itens.push(produto);
    return acc;
  }, []);

  return (
    <main>
      <h1>Home</h1>
      {produtosAgrupados.map((grupo) => (
        <Fragment key={grupo.categoria}>
          <h2>{grupo.categoria}</h2>
          {grupo.itens.map((produto) => (
            <Produto key={produto.id} produto={produto} />
          ))}
        </Fragment>
      ))}
    </main>
  );
}
