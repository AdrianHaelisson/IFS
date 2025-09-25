export class Carro {
  marca: string;
  modelo: string;
  private velocidade: number;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar(valor: number): void {
    if (valor > 0) {
      this.velocidade += valor;
    }
  }

  frear(valor: number): void {
    if (valor > 0) {
      this.velocidade = Math.max(0, this.velocidade - valor);
    }
  }

  get velocidadeAtual(): number {
    return this.velocidade;
  }
}
