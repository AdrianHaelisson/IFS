import { useState, useEffect } from "react";
import api from "../api";
import Categoria from "../components/Categoria";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    async function getCategorias() {
      try {
        const response = await api.get("/products/categories");
        setCategorias(response.data);
      } catch (error) {
        alert("Erro ao tentar recuperar as categorias");
      }
    }
    getCategorias();
  }, []);
  return (
    <main>
      <h1>Categorias</h1>
      {categorias.map((categoria) => (
        <Categoria key={categoria.slug} categoria={categoria} />
      ))}
    </main>
  );
}
