export interface IEscola {
    id_escola: number
    codigo_mec: number | null
    nome: string | null
    data_fundacao: Date | string | null
    email: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cep: string | null
    municipio: string | null
    data_cadastro: Date | string
    matriculados: number
}

export interface IEscolaManifestacao {
    nome: string | null
    total: number
}

export interface IEscolaFinanceiro {
    nome: string | null
    repasse_mensal: number
    repasse_anual: number
}
export interface IEscolaLaboratorio {
    nome: string | null
    matriculados: number
    laboratorio: number
}