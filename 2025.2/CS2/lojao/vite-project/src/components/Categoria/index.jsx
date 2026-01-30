import PropTypes from "prop-types";
import "./style.css";
export default function Categoria({ categoria }) {
  return <div className="categoria">{categoria.name}</div>;
}
Categoria.propTypes = {
  categoria: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};
