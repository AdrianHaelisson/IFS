// src/atendente/cadastrar_cliente.js

/**
 * Função para cadastrar um novo cliente no sistema.
 * @param {object} dadosCliente - Objeto com os dados do cliente (nome, cpf, telefone, etc.).
 * @returns {object} - O objeto do cliente criado.
 */
function cadastrarCliente(dadosCliente) {
  console.log(`Cadastrando cliente: ${dadosCliente.nome}`);
  // Lógica para salvar o cliente no banco de dados.
  const cliente = { id: Date.now(), ...dadosCliente };
  console.log(`Cliente ${cliente.nome} cadastrado com o ID: ${cliente.id}`);
  return cliente;
}

// Exemplo de uso:
// const novoCliente = cadastrarCliente({ nome: 'João da Silva', cpf: '123.456.789-00', telefone: '79999999999' });
