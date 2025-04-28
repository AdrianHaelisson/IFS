function ePar(numero: number) {
  return numero % 2 == 0;
}

const arrayNumeros = [2, 4, 6, 7, 8];
let contador = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
  if (ePar(arrayNumeros[i])) {
    contador++;
  }
}

console.log(`A quantidade de números pares é ${contador}`);
