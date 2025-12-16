import { Usuario } from "../entities/IUsuario.js";
import { prisma } from "../prismaClient.js";

export class UserRepository {
  async findByLogin(login: string): Promise<Usuario | null> {
    const rows = (await prisma.$queryRaw`
            SELECT id, login, senha FROM Usuario
            WHERE login = ${login}
        `) as Usuario[];

    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }
  async auth(login: string, senha: string): Promise<Usuario | null> {
    const rows = (await prisma.$queryRaw`
            SELECT id, login
            FROM "Usuario"
            Where login = ${login} and senha = ${senha}
        `) as Usuario[];
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }

  async listAll(): Promise<Usuario[]> {
    const rows = (await prisma.$queryRaw`
    SELECT id, login, senha
    FROM "Usuario"
    ORDER BY id
    `) as Usuario[];
    return rows;
  }
  async criar(login: string, senha: string): Promise<Usuario> {
    const user = await prisma.usuario.create({
      data: { login, senha },
    });
    return user;
  }
}
