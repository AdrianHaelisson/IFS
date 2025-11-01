import { prisma } from "../prisma.js"
import type { IEscola } from "../entities/IEscola.js"

export class EscolaRepository {
  constructor(private db = prisma) {}

  async listar(limit = 50, offset = 0, query:string): Promise<IEscola[]> {
    const rows = await this.db.$queryRaw<IEscola[]>`
      SELECT id_escola, codigo_mec, nome, data_fundacao, email,
             numero, complemento, bairro, cep, municipio, data_cadastro
      FROM public.escola
      WHERE nome ILIKE ${'%' + query + '%'}
      ORDER BY id_escola
      LIMIT ${limit} OFFSET ${offset};
    `
    return rows
  }

  async buscarPorId(id: number): Promise<IEscola | null> {
    const rows = await this.db.$queryRaw<IEscola[]>`
      SELECT id_escola, codigo_mec, nome, data_fundacao, email,
             numero, complemento, bairro, cep, municipio, data_cadastro
      FROM public.escola
      WHERE id_escola = ${id};
    `
    return rows[0] ?? null
  }

  async criar(data: Partial<IEscola>): Promise<IEscola> {
    const rows = await this.db.$queryRaw<IEscola[]>`
      INSERT INTO public.escola
        (codigo_mec, nome, data_fundacao, email,
         numero, complemento, bairro, cep, municipio, data_cadastro)
      VALUES
        (${data.codigo_mec}, ${data.nome}, ${data.data_fundacao},
         ${data.email}, ${data.numero}, ${data.complemento},
         ${data.bairro}, ${data.cep}, ${data.municipio}, NOW())
      RETURNING id_escola, codigo_mec, nome, data_fundacao, email,
                numero, complemento, bairro, cep, municipio, data_cadastro;
    `
    return rows[0]
  }

  async atualizar(id: number, data: Partial<IEscola>): Promise<IEscola> {
    const rows = await this.db.$queryRaw<IEscola[]>`
      UPDATE public.escola
      SET
        codigo_mec = COALESCE(${data.codigo_mec}, codigo_mec),
        nome = COALESCE(${data.nome}, nome),
        data_fundacao = COALESCE(${data.data_fundacao}, data_fundacao),
        email = COALESCE(${data.email}, email),
        numero = COALESCE(${data.numero}, numero),
        complemento = COALESCE(${data.complemento}, complemento),
        bairro = COALESCE(${data.bairro}, bairro),
        cep = COALESCE(${data.cep}, cep),
        municipio = COALESCE(${data.municipio}, municipio)
      WHERE id_escola = ${id}
      RETURNING id_escola, codigo_mec, nome, data_fundacao, email,
                numero, complemento, bairro, cep, municipio, data_cadastro;
    `
    return rows[0]
  }

  async deletar(id: number): Promise<void> {
    await this.db.$executeRaw`
      DELETE FROM public.escola WHERE id_escola = ${id};
    `
  }
}