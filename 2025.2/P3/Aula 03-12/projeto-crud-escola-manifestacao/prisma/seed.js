import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Limpando tabela escola...");
  await prisma.escola.deleteMany();

  console.log("Inserindo escolas...");
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
        municipio: "Aracaju",
      },
      {
        codigo_mec: 12345678,
        nome: "Escola Estadual 2",
        data_fundacao: new Date("2000-03-15"),
        email: "contato@escola1.edu.br",
        numero: "100",
        complemento: "Prédio A",
        bairro: "Centro",
        cep: "40000-000",
        municipio: "Tobias",
      },
    ],
  });

  console.log("Seeds executadas com sucesso.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Erro ao executar seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
