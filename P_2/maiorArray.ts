// Considere um array de 5 números e indique o maior número
const numeros = [2, 4, 6, 7, 9999, 8];

let maior = numeros[0];
let posicao = 0;
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
    posicao = i;
  }
}
console.log(`O maior número é ${maior}, na posicao ${posicao}`);
