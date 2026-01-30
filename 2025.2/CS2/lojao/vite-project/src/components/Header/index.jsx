import {
  FaHome,
  FaLayerGroup,
  FaBox,
  FaShoppingCart,
  FaUserAlt,
  FaSignInAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
export default function Header() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  return (
    <nav>
      <Link to="/">
        <h1>O Lojão</h1>
      </Link>
      <Link to="/">
        <FaHome size={24} /> Home
      </Link>
      <Link to="/categorias">
        <FaLayerGroup size={24} /> Categorias
      </Link>
      <Link to="/carrinho">
        <FaShoppingCart size={24} /> Carrinho
      </Link>
      {usuarioLogado ? (
        <>
          <Link to="/pedidos">
            <FaBox size={24} /> Pedidos
          </Link>
          <Link to="/perfil">
            <FaUserAlt size={24} /> Perfil
          </Link>
          <Link to="/logout">
            <FaSignInAlt size={24} /> Logout
          </Link>
        </>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} /> Login
        </Link>
      )}
    </nav>
  );
}
