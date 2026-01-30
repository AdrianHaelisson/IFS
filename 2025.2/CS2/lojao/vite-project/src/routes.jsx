import { Routes, Route } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Page404 from "./pages/Page404";
import Pedidos from "./pages/Pedidos";
import Perfil from "./pages/Perfil";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
