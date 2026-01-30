export default function Logout() {
  localStorage.removeItem("usuarioLogado");
  location.assign("/");
  return (
    <main>
      <h1>Logout</h1>
    </main>
  );
}
