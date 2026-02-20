### **Estudo de Caso - Projeto SmartFix-TB**

**Professor:** Elton Rafael
**Data:** 06/02/2026

### **Parte 1: Engenharia de Software (UML)**

#### **1. Atores**

Com base no cenário descrito, os atores do sistema SmartFix-TB são:

*   **Atendente:** Responsável por interagir com o cliente para registrar informações e iniciar a ordem de serviço.
*   **Técnico:** Responsável pela análise, diagnóstico e atualização do andamento do conserto.
*   **Cliente:** O proprietário do dispositivo, que deseja acompanhar o status do seu reparo.

#### **2. Diagrama de Caso de Uso**

A seguir, o mapeamento das funcionalidades (casos de uso) e o diagrama que representa as interações dos atores com o sistema.

**Casos de Uso Identificados:**

*   **Cadastrar Cliente:** O Atendente insere os dados do cliente no sistema.
*   **Abrir Ordem de Serviço (OS):** O Atendente cria uma nova OS, associando-a a um cliente e a um dispositivo.
*   **Realizar Diagnóstico:** O Técnico analisa o dispositivo e registra o diagnóstico na OS.
*   **Atualizar Status da OS:** O Técnico modifica o status da OS para refletir o andamento do reparo (ex: "Aguardando peça", "Em conserto", "Finalizado").
*   **Consultar Status do Reparo:** O Cliente acessa o sistema (site) para verificar o andamento da sua OS usando o CPF.

**Diagrama:**

```mermaid
graph TD
    subgraph "Sistema SmartFix-TB"
        UC1(Cadastrar Cliente)
        UC2(Abrir Ordem de Serviço)
        UC3(Realizar Diagnóstico)
        UC4(Atualizar Status da OS)
        UC5(Consultar Status do Reparo)
    end

    Atendente --|> UC1
    Atendente --|> UC2

    Técnico --|> UC3
    Técnico --|> UC4

    Cliente --|> UC5

    UC2 -- "include" --> UC1
    UC3 -- "include" --> UC4

    style Atendente fill:#f9f,stroke:#333,stroke-width:2px
    style Técnico fill:#f9f,stroke:#333,stroke-width:2px
    style Cliente fill:#f9f,stroke:#333,stroke-width:2px
```

*Este diagrama representa o Atendente cadastrando clientes e abrindo ordens de serviço. O Técnico realiza o diagnóstico e atualiza o status. O Cliente consulta o status do reparo. A abertura de uma OS (`UC2`) inclui (`include`) o cadastro do cliente (`UC1`) se for um novo cliente, e o diagnóstico (`UC3`) leva à atualização do status (`UC4`).*

---

### **Parte 2: Gestão Ágil (Scrumban)**

#### **1. Priorização (Scrum) para a Primeira Sprint**

Considerando que temos apenas 2 semanas, o objetivo da primeira **Sprint** é entregar um **Produto Mínimo Viável (MVP)** que resolva a dor principal: o controle das ordens de serviço e a visibilidade para o cliente.

**Casos de Uso para a Sprint 1:**

1.  **Abrir Ordem de Serviço (OS):** Inclui a funcionalidade de **Cadastrar Cliente**, pois é impossível abrir uma OS sem um cliente.
2.  **Atualizar Status da OS:** Essencial para que o trabalho do técnico seja refletido no sistema.
3.  **Consultar Status do Reparo:** Entrega o valor principal ao cliente, permitindo que ele mesmo verifique o andamento, reduzindo a carga de trabalho do atendente.

**Por que começar por eles?**

Essa seleção cria o **fluxo de valor completo e mais essencial** do sistema. Ao final da primeira Sprint, teríamos uma versão funcional que permite:

*   **Entrada:** O Atendente consegue parar de usar o papel e registrar as novas OS no sistema.
*   **Processamento:** O Técnico consegue atualizar o andamento, fornecendo a informação central.
*   **Saída:** O Cliente já pode usar a funcionalidade de consulta, o que resolve o problema central de comunicação e controle descrito no cenário.

O caso de uso "Realizar Diagnóstico" pode ser implementado de forma simples, como parte da "Atualizar Status da OS", onde o técnico pode adicionar uma nota ou mudar o status para "Diagnosticado".

#### **2. Gestão de Impedimentos (Quadro Kanban)**

Se uma peça necessária para o conserto não chegar, essa tarefa fica **bloqueada**. Em um quadro **Kanban**, a maneira correta de sinalizar isso para o time é a seguinte:

1.  **Mover para uma Coluna de Bloqueio:** A prática mais comum é mover o cartão (a tarefa) da coluna "Em Andamento" para uma coluna específica chamada **"Bloqueado"** ou **"Impedido"**. Isso torna o impedimento visualmente óbvio para todos no time.
2.  **Adicionar um Indicador Visual:** Se o quadro não tiver uma coluna de bloqueio, pode-se usar um "bloqueador" visual no próprio cartão. Isso geralmente é um **adesivo ou um marcador vermelho** colocado sobre a tarefa.
3.  **Descrever o Motivo do Bloqueio:** É fundamental adicionar uma nota ou comentário ao cartão explicando *por que* ele está bloqueado e qual é a condição para desbloqueá-lo. Por exemplo: *"Aguardando a chegada da tela do modelo X. Previsão de entrega: 3 dias."*

Dessa forma, durante a reunião diária (Daily Scrum), o time pode ver imediatamente a tarefa travada, discutir o impacto e planejar ações para resolver o impedimento, como contatar o fornecedor ou comunicar o atraso ao cliente. A transparência é a chave.
