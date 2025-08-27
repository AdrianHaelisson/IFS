export class Livro {
  titulo: string;
  autor: string;
  numeroPaginas: number;

  constructor(titulo: string, autor: string, numeroPaginas: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }
}

export class Usuario {
  nome: string;
  private livrosEmprestados: Livro[];
  constructor(nome: string) {
    this.nome = nome;
    this.livrosEmprestados = [];
  }

  pegarLivro(livro: Livro): void {
    this.livrosEmprestados.push(livro);
  }

  devolverLivro(livro: Livro): boolean {
    const index = this.livrosEmprestados.findIndex(
      (l) => l.titulo === livro.titulo && l.autor === livro.autor
    );
    if (index !== -1) {
      this.livrosEmprestados.splice(index, 1);
      return true;
    }
    return false;
  }

  listarLivrosEmprestados(): Livro[] {
    return [...this.livrosEmprestados];
  }
}

export class Biblioteca {
  livrosDisponiveis: Livro[];

  constructor(livrosIniciais: Livro[] = []) {
    this.livrosDisponiveis = livrosIniciais;
  }

  emprestarLivro(titulo: string, usuario: Usuario): void {
    const index = this.livrosDisponiveis.findIndex((l) => l.titulo === titulo);

    if (index !== -1) {
      const livroParaEmprestar = this.livrosDisponiveis.splice(index, 1)[0];
      usuario.pegarLivro(livroParaEmprestar);
      console.log(
        `Livro "${livroParaEmprestar.titulo}" emprestado para ${usuario.nome}.`
      );
    } else {
      console.log(`O livro "${titulo}" não está disponível na biblioteca.`);
    }
  }

  devolverLivro(titulo: string, usuario: Usuario): void {
    const livroParaDevolver = usuario
      .listarLivrosEmprestados()
      .find((l) => l.titulo === titulo);

    if (livroParaDevolver && usuario.devolverLivro(livroParaDevolver)) {
      this.livrosDisponiveis.push(livroParaDevolver);
      console.log(
        `Livro "${livroParaDevolver.titulo}" devolvido por ${usuario.nome}.`
      );
    } else {
      console.log(`O usuário ${usuario.nome} não possui o livro "${titulo}".`);
    }
  }
}
