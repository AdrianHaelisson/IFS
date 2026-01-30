import PropTypes from "prop-types";
import "./style.css";
export default function Produto({ produto }) {
  function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let achado = false;
    for (let i = 0; i < carrinho.length; i++) {
      if (carrinho[i].id == produto.id) {
        carrinho[i].quantity++;
        achado = true;
        break;
      }
    }
    if (!achado) {
      const item = { ...produto, quantity: 1 };
      carrinho.push(item);
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Adicionado!");
  }
  return (
    <div className="produto" key={produto.id}>
      <img className="img-produto" src={produto.thumbnail} />
      <p>
        <strong>
          {produto.title} ({produto.brand})
        </strong>
      </p>
      <p>R$ {produto.price}</p>
      <p>Nota: {produto.rating}</p>
      <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar</button>
    </div>
  );
}
Produto.propTypes = {
  produto: PropTypes.object.isRequired,
};
