# Docker MCP no VS Code

Este workspace já está configurado para usar o Docker MCP de duas formas:

1) Continue (padrão neste repo)
- Arquivo: `.continue/config.json`
- Método: `stdio` executando `docker mcp gateway run` (requer Docker Desktop com MCP Toolkit)
- Passos:
  - Verifique se o comando `docker mcp` está disponível (Docker Desktop atualizado + MCP Toolkit).
  - No VS Code, rode “Continue: Reload” (ou reinicie o VS Code).
  - No chat do Continue, verifique as ferramentas do Docker MCP e teste listar containers.

2) Qualquer cliente que leia `mcp.servers` nas configurações do VS Code
- Arquivo: `.vscode/settings.json`
- Chave: `"mcp.servers"` com a entrada `MCP_DOCKER` usando `stdio` (`docker mcp gateway run`).

Alternativa (Cline):
- Paleta de Comandos → “Cline: MCP Servers” → “Add from Registry/Marketplace” e selecione “Docker Engine”.
- Ou “Add Custom” e cole o client config que o MCP Toolkit fornece.

Observações:
- O modo `stdio` depende do subcomando `docker mcp`. Se ele não existir, atualize o Docker Desktop e habilite o MCP Toolkit.
- Caso prefira o modo via URL (SSE) do MCP Toolkit, podemos alternar o `.continue/config.json` para `type: "sse"` e informar a `url`.
