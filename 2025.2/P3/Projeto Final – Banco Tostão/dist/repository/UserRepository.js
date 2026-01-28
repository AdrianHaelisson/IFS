import { prisma } from "../prismaClient.js";
export class UserRepository {
    async findByLogin(login) {
        const user = await prisma.usuario.findUnique({
            where: { login },
        });
        return user;
    }
    async auth(login, senha) {
        // In a real app, you should compare hashed passwords.
        // Here we find by login and check if password matches.
        const user = await prisma.usuario.findFirst({
            where: {
                login,
                senha
            }
        });
        return user;
    }
    async listAll() {
        const users = await prisma.usuario.findMany({
            orderBy: { id: 'asc' },
        });
        return users;
    }
    async criar(login, senha) {
        const user = await prisma.usuario.create({
            data: { login, senha },
        });
        return user;
    }
}
//# sourceMappingURL=UserRepository.js.map