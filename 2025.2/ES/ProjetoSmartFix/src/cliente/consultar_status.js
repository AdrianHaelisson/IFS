// src/cliente/consultar_status.js

/**
 * Função para o cliente consultar o status do reparo usando o CPF.
 * @param {string} cpf - CPF do cliente.
 * @returns {Array<object>} - Uma lista de Ordens de Serviço associadas ao CPF.
 */
function consultarStatusPorCPF(cpf) {
  console.log(`Buscando Ordens de Serviço para o CPF: ${cpf}`);
  // Lógica para buscar as OSs no banco de dados filtrando pelo CPF do cliente.
  
  // Exemplo de retorno mockado:
  const osEncontradas = [
    { id: 'OS-123456', dispositivo: { modelo: 'iPhone 12' }, status: 'Em conserto' },
    { id: 'OS-789012', dispositivo: { modelo: 'Galaxy S20' }, status: 'Aguardando peça' },
  ];

  console.log(`${osEncontradas.length} OS(s) encontrada(s).`);
  return osEncontradas;
}

// Exemplo de uso:
// const minhasOS = consultarStatusPorCPF('123.456.789-00');
// console.log(minhasOS);
