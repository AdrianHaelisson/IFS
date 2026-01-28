export interface Transacao {
    id: number;
    id_conta: string;
    tipo: string;
    valor: number;
    descricao: string;
    criado_em: Date;
}