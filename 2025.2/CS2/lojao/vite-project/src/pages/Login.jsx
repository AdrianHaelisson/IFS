import { useState } from "react";
import api from "../api";

export default function Login() {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  async function handleSubmit(e) {
    e.preventDefault();
    const dados = {
      username,
      password,
    };
    try {
      const response = await api.post("/auth/login", dados);
      console.log(response.data);
      localStorage.setItem("usuarioLogado", JSON.stringify(response.data));
      location.assign("/");
    } catch (error) {
      alert("Login inválido!");
    }
  }
  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Enviar" />
      </form>
    </main>
  );
}
