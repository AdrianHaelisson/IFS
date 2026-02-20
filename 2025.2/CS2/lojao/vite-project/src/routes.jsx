import { Routes, Route } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Page404 from "./pages/Page404";
import Pedidos from "./pages/Pedidos";
import Perfil from "./pages/Perfil";

function checkLogin(Component) {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (usuarioLogado) {
    return Component;
  } else {
    return (
      <Navigate replace to="/login" state={{ prevPath: location.pathname }} />
    );
  }
}

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pedidos" element={checkLogin(<Pedidos />)} />
      <Route path="/perfil" element={checkLogin(<Perfil />)} />
      <Route path="/logout" element={checkLogin(<Logout />)} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
