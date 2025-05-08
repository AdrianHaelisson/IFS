function calculaMedia(nota1: number, nota2: number, nota3: number): Number {
  return (nota1 + nota2 + nota3) / 3;
}

let media = calculaMedia(9, 8, 7);
console.log(typeof media);
