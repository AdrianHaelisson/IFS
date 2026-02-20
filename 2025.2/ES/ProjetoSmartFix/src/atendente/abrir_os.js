// src/atendente/abrir_os.js

/**
 * Função para abrir uma nova Ordem de Serviço (OS).
 * @param {number} clienteId - ID do cliente para associar a OS.
 * @param {object} dadosDispositivo - Objeto com os dados do dispositivo (modelo, marca, defeito relatado).
 * @returns {object} - O objeto da OS criada.
 */
function abrirOS(clienteId, dadosDispositivo) {
  console.log(`Abrindo OS para o cliente ID: ${clienteId}`);
  // Lógica para criar a OS no banco de dados.
  const novaOS = {
    id: `OS-${Date.now()}`,
    clienteId,
    dispositivo: dadosDispositivo,
    status: 'Aberto',
    dataAbertura: new Date().toISOString(),
  };
  console.log(`OS ${novaOS.id} criada com sucesso.`);
  return novaOS;
}

// Exemplo de uso:
// const os = abrirOS(1, { modelo: 'iPhone 12', marca: 'Apple', defeito: 'Tela não liga' });
