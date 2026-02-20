import PropTypes from "prop-types";
import "./style.css";
export default function Pedido({ pedido }) {
  return (
    <div className="pedido">
      <div className="float-left">dd/mm/aaaa</div>
      <div className="float-right">Entregue</div>
      <hr className="clear-both" />
      {pedido.products.map((produto) => (
        <div key={produto.id}>
          {produto.quantity}x {produto.title}
        </div>
      ))}
    </div>
  );
}
Pedido.propTypes = {
  pedido: PropTypes.object.isRequired,
};
