import PropTypes from "prop-types";
import "./style.css";
export default function Item({ item, onIncrease, onDecrease }) {
  return (
    <div className="item" key={item.id}>
      <div className="float-left">
        <strong>{item.title}</strong>
        <br />
        <div className="item-qty">
          <span className="item-qty-label">Qtd:</span>
          <button
            type="button"
            className="item-qty-btn"
            onClick={onDecrease}
          >
            -
          </button>
          <span className="item-qty-value">{item.quantity}</span>
          <button
            type="button"
            className="item-qty-btn"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
      </div>
      <div className="float-right text-right">
        Valor unitário: R$ {item.price}
        <br />
        Subtotal: R$ {item.quantity * item.price}
      </div>
      <hr className="clear-both mb-10" />
    </div>
  );
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};
