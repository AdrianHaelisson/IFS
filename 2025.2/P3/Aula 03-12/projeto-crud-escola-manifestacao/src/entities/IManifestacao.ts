export interface IManifestacao {
    id_manifestacao: number
    descricao: string | null
    id_escola: number
    escola_nome: string | null
    bairro: string | null
    data_cadastro: Date | string
}
