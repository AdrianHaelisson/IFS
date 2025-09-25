export class Funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  mostrarInfo(): string {
    return `Nome: ${this.nome}, Salário: R$${this.salario}`;
  }
}

export class Gerente extends Funcionario {
  bonus: number;

  constructor(nome: string, salario: number, bonus: number) {
    super(nome, salario);
    this.bonus = bonus;
  }
  mostrarInfo(): string {
    return `${super.mostrarInfo()}, Bônus R$${this.bonus}`;
  }
}
