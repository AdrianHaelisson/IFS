import { prisma } from "../prisma.js"
import type { IManifestacao } from "../entities/IManifestacao.js"
import { PrismaClient } from "@prisma/client";

export class ManifestacaoRepository {
    private db: PrismaClient;

    constructor() {
        this.db = prisma;
    }

    async listar(limit = 50, offset = 0): Promise<IManifestacao[]> {
        const rows = await this.db.$queryRaw<IManifestacao[]>`
          SELECT manifestacao.id_escola, id_manifestacao, nome as escola_nome, bairro, descricao, manifestacao.data_cadastro
          FROM public.manifestacao
          inner join escola on manifestacao.id_escola = escola.id_escola
          ORDER BY id_manifestacao
          LIMIT ${limit} OFFSET ${offset};
        `
        return rows
    }

    async cadastrar(data: Partial<IManifestacao>): Promise<void> {
        await this.db.$executeRaw`
          INSERT INTO public.manifestacao
            (descricao, id_escola, data_cadastro)
          VALUES
            (${data.descricao}, ${data.id_escola}, NOW());
        `
    }

    async deletar(id:Number): Promise<void> {
        await this.db.$executeRaw`
          DELETE FROM public.manifestacao
          WHERE id_manifestacao = ${id};
        `
    }
}
