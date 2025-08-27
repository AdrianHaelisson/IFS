export class ContaBancaria {
  titular: string;
  private saldo: number;

  constructor(titular: string) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Deposito de R$${valor} realizado com sucesso.`);
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso.`);
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente.");
    } else {
      console.log("O valor do saque deve ser positivo.");
    }
  }

  verSaldo(): void {
    console.log(`Saldo em conta: R$${this.saldo}`);
  }
}
