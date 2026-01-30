export default function Perfil() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  return (
    <main>
      <h1>Perfil</h1>
      <div className="text-center">
        <img className="img-perfil" src={usuarioLogado.image} />
      </div>
      <p>
        <strong>Nome:</strong> {usuarioLogado.firstName}{" "}
        {usuarioLogado.lastName}
      </p>
      <p>
        <strong>Usuário:</strong> {usuarioLogado.username}
      </p>
      <p>
        <strong>E-mail:</strong> {usuarioLogado.email}
      </p>
      <p>
        <strong>Gênero:</strong> {usuarioLogado.gender}
      </p>
    </main>
  );
}
