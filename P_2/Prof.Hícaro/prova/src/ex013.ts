const senha: string = 'Adrian'
function senhaForte(senha: string): boolean {
  if (senha.length < 8) {
    console.log("Erro: Senha tem menos de 8 caracteres.");
    return false;
  }

  let contemNumero = false;
  let contemMaiuscula = false;

  for (let i = 0; i < senha.length; i++) {
    const caractere = senha[i]; 

    if (!isNaN(parseInt(caractere)) && caractere >= '0' && caractere <= '9') {
      contemNumero = true;
    }

    if (caractere >= 'A' && caractere <= 'Z') {
        contemMaiuscula = true;
    }

    if (contemNumero && contemMaiuscula) {
      break; 
    }
  }

  if (!contemNumero) {
    console.log("Erro: Senha não contém números."); 
    return false;
  }

  if (!contemMaiuscula) {
    console.log("Erro: Senha não contém letras maiúsculas."); 
    return false;
  }

  return true;
}
console.log(senhaForte(senha));