-- CreateTable
CREATE TABLE "escola" (
    "id_escola" SERIAL NOT NULL,
    "codigo_mec" INTEGER,
    "nome" VARCHAR(250),
    "data_fundacao" TIMESTAMP(6),
    "email" VARCHAR(100),
    "numero" VARCHAR(20),
    "complemento" VARCHAR(100),
    "bairro" VARCHAR(100),
    "cep" VARCHAR(11),
    "municipio" VARCHAR(100),
    "data_cadastro" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "escola_pkey" PRIMARY KEY ("id_escola")
);

-- CreateTable
CREATE TABLE "manifestacao" (
    "id_manifestacao" SERIAL NOT NULL,
    "descricao" VARCHAR(10000),
    "data_cadastro" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_escola" INTEGER NOT NULL,

    CONSTRAINT "manifestacao_pk" PRIMARY KEY ("id_manifestacao")
);

-- CreateIndex
CREATE INDEX "id_escola_manifestacao_idx" ON "manifestacao"("id_escola");

-- AddForeignKey
ALTER TABLE "manifestacao" ADD CONSTRAINT "manifestacao_escola_fk" FOREIGN KEY ("id_escola") REFERENCES "escola"("id_escola") ON DELETE NO ACTION ON UPDATE NO ACTION;
