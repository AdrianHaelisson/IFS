import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main() {
    console.log("Limpando tabela escola...")
    await prisma.escola.deleteMany()
    console.log("Inserindo escolas...")
    await prisma.escola.createMany({
        data: [
            {
                codigo_mec: 12345678,
                nome: "Escola Estadual 1",
                data_fundacao: new Date("2000-03-15"),
                email: "contato@escola1.edu.br",
                numero: "100",
                complemento: "Prédio A",
                bairro: "Centro",
                cep: "40000-000",
                municipio: "Aracaju"
            },
            {
                codigo_mec: 87654321,
                nome: "Escola Estadual 2",
                data_fundacao: new Date("2010-08-20"),
                email: "contato@escola2.edu.br",
                numero: "200",
                complemento: "Anexo 1",
                bairro: "Jardim das Árvores",
                cep: "41000-000",
                municipio: "Aracaju"
            },
            {
                codigo_mec: 44556677,
                nome: "Escola 3",
                data_fundacao: new Date("2015-02-10"),
                email: "contato@escola3.edu.br",
                numero: "500",
                complemento: "Bloco B",
                bairro: "Tecnologia",
                cep: "42000-000",
                municipio: "Lagarto"
            },
        ]
    })
    console.log("Seeds executadas com sucesso.")
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error("Erro ao executar seed:", e)
        await prisma.$disconnect()
        process.exit(1)
    })