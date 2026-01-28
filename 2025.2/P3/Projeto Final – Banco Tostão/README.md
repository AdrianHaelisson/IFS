# 🏦 Banco Tostão API

API RESTful para um sistema bancário simplificado, desenvolvida como Projeto Final da disciplina. O sistema permite gestão de usuários, autenticação segura e operações financeiras como depósitos, saques e transferências entre contas.

## 🚀 Tecnologias

- **Node.js** & **TypeScript**: Plataforma e linguagem base.
- **Express**: Framework web.
- **Prisma ORM**: Manipulação de banco de dados e migrações.
- **PostgreSQL**: Banco de dados relacional.
- **Zod**: Validação rigorosa de dados (Schemas).
- **JWT (Json Web Token)**: Autenticação e segurança de rotas.

## ✨ Funcionalidades

- **Autenticação**: Cadastro de usuários e Login (JWT).
- **Gestão de Saldo**:
  - **Depósito**: Adicionar fundos à própria conta.
  - **Saque**: Retirar fundos (com validação de saldo insuficiente).
- **Transferências**: Envio de valores entre usuários.
  - *Atomicidade*: Uso de transações de banco de dados (`Prisma Interactive Transactions`) para garantir que o dinheiro nunca se perca no caminho.
- **Extrato**: Histórico completo de transações (entradas e saídas) ordenado por data.
- **Segurança**: Middlewares para proteção de rotas e tratamento centralizado de erros.

## 🛠️ Configuração e Instalação

### Pré-requisitos
- Node.js (v18+)
- PostgreSQL rodando localmente

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/banco-tostao.git
   cd banco-tostao
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente**
   Crie um arquivo `.env` na raiz do projeto com as seguintes chaves (exemplo incluído no projeto):
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
   JWT_SECRET="sua_chave_secreta_super_segura"
   ```

4. **Banco de Dados**
   Execute as migrações para criar as tabelas (`Usuario`, `Saldo`, `Transacao`) no seu banco PostgreSQL:
   ```bash
   npx prisma migrate dev
   ```

5. **Execute o Projeto**
   Para rodar em modo de desenvolvimento (com auto-reload):
   ```bash
   npm run dev
   ```

## 🧪 Testes

O projeto inclui um script de teste de integração que simula um fluxo real de uso (criação de usuários, login, depósito, transferência e saque).

Com o servidor rodando em um terminal, abra outro e execute:
```bash
node scripts/test-banking.js
```
Você verá o log passo a passo de todas as operações sendo validadas.

## 📚 Documentação da API

### Autenticação & Usuários

| Método | Rota         | Descrição                  | Corpo da Requisição (JSON) |
| :---   | :---         | :---                       | :--- |
| `POST` | `/usuarios`  | Criar novo usuário         | `{ "login": "user", "senha": "123" }` |
| `POST` | `/login`     | Autenticar e receber Token | `{ "login": "user", "senha": "123" }` |

### Transações (Requer Bearer Token)

| Método | Rota                    | Descrição               | Corpo da Requisição (JSON) |
| :---   | :---                    | :---                    | :--- |
| `POST` | `/transacao/depositar`  | Depositar na conta      | `{ "valor": 100.00, "tipo": "DEPOSITO" }` |
| `POST` | `/transacao/sacar`      | Sacar da conta          | `{ "valor": 50.00, "tipo": "SAQUE" }` |
| `POST` | `/transacao/transferir` | Transferir para outro   | `{ "valor": 30.00, "tipo": "TRANSFERENCIA", "destinatarioLogin": "outro_user" }` |
| `GET`  | `/transacao/extrato`    | Ver histórico           | *Nenhum* |

## 🏗️ Estrutura do Projeto

```
src/
├── controllers/    # Lógica de controle (User, Auth, Transaction, Saldo)
├── middlewares/    # Auth (JWT) e Tratamento de Erros
├── repository/     # Camada de acesso ao banco (Prisma)
├── routes/         # Definição das rotas da API
├── schemas/        # Definições de validação Zod
└── server.ts       # Ponto de entrada da aplicação
```
