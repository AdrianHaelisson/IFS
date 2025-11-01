const fs = require("fs");
const minha_var = "Conteúdo salvo no arquivo";

fs.writeFile("meuarquivo.txt", minha_var, (err) => {
  if (err) {
    console.error("Erro ao escrever no arquivo: ", err);
    return;
  }
});
