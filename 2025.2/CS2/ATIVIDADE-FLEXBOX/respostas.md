# Respostas da Atividade Prática com Flexbox

## Pergunta-Chave 1 (Conceitual)

**Pergunta:** Descreva o papel do `justify-content` e do `align-items` no seu menu de navegação. Qual propriedade você utilizou para forçar os links para o lado oposto do logotipo?

**Resposta:** O `justify-content` e o `align-items` foram essenciais para alinhar os itens do menu de navegação. O `justify-content` foi usado para distribuir o espaço entre o logotipo e os links, enquanto o `align-items` garantiu o alinhamento vertical. Para forçar os links para o lado oposto do logotipo, utilizei a propriedade `justify-content: space-between`.

## Pergunta-Chave 2 (Resolução de Problemas)

**Pergunta:** Qual foi a principal dificuldade encontrada ao tentar centralizar o formulário de login? Qual combinação de propriedades Flexbox resolveu esse problema e por quê?

**Resposta:** A maior dificuldade foi centralizar o formulário de login tanto vertical quanto horizontalmente. A combinação de `display: flex`, `justify-content: center`, e `align-items: center` no container principal resolveu o problema, garantindo um alinhamento perfeito.

## Pergunta-Chave 3 (Aplicação Prática)

**Pergunta:** Como a organização em colunas do seu rodapé (usando Flexbox) seria mais complicada ou exigiria mais código se você tivesse usado o método de `float`?

**Resposta:** Com Flexbox, a organização em colunas do rodapé foi simples, usando `display: flex` e `justify-content: space-around`. Com `float`, seria necessário usar `float: left` em cada coluna, definir larguras percentuais e adicionar um "clearfix" para evitar que os elementos seguintes quebrassem o layout, tornando o código mais complexo e menos robusto.
