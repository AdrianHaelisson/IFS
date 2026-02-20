// src/tecnico/atualizar_status_os.js

/**
 * Função para o técnico atualizar o status de uma Ordem de Serviço.
 * @param {string} osId - ID da OS a ser atualizada.
 * @param {string} novoStatus - O novo status da OS (ex: 'Em diagnóstico', 'Aguardando peça', 'Finalizado').
 * @param {string} [diagnostico=''] - Descrição do diagnóstico ou do trabalho realizado.
 * @returns {object} - O objeto da OS atualizada.
 */
function atualizarStatusOS(osId, novoStatus, diagnostico = '') {
  console.log(`Atualizando status da OS ${osId} para: ${novoStatus}`);
  // Lógica para buscar a OS no banco de dados e atualizar seu status.
  const osAtualizada = {
    id: osId,
    status: novoStatus,
    diagnostico,
    dataAtualizacao: new Date().toISOString(),
  };
  console.log(`OS ${osId} atualizada.`);
  return osAtualizada;
}

// Exemplo de uso:
// atualizarStatusOS('OS-123456', 'Em conserto', 'Troca da placa principal.');
