//let prompt = require("prompt-sync")();
import promptConfig from "prompt-sync";
let prompt = promptConfig();

function calculaMedia(): number {
  const nota1 = Number(prompt("Digite sua primeira nota: "));
  const nota2 = Number(prompt("Digite sua segunda nota: "));
  const nota3 = Number(prompt("Digite sua terceira nota: "));

  const media = (nota1 + nota2 + nota3) / 3;
  return media;
}

console.log(calculaMedia());
