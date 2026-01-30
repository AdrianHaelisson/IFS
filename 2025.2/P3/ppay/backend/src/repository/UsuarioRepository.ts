import { prisma } from "../prismaClient.js";
import { Usuario } from "@prisma/client";

export class UsuarioRepository {
    async findByLogin(login: string): Promise<Usuario | null> {
        return await prisma.usuario.findUnique({
            where: { login },
        });
    }

    async listALL(): Promise<Omit<Usuario, "senha">[]> {
        return await prisma.usuario.findMany({
            select: {
                id: true,
                login: true,
                saldo: true
                // Exclui a senha
            }
        });
    }

    async criar(login: string, senha?: string): Promise<Usuario> {
        return await prisma.usuario.create({
            data: {
                login,
                senha: senha || "123456", // Senha padrão se não fornecida, satisfazendo a restrição do BD e a assinatura solicitada
            },
        });
    }
}
