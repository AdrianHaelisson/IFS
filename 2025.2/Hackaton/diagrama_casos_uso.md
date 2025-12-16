# Diagrama de Casos de Uso - IFS Hackathon App

Este documento apresenta os atores e suas interações com o sistema desenvolvido.

```mermaid
flowchart LR
    %% Atores
    C((Consumidor))
    E((Expositor))
    A((Administrador))

    %% Casos de Uso
    subgraph "Catálogo e Compras"
        direction TB
        UC1([Visualizar Catálogo])
        UC2([Filtrar Produtos - Nome/Preço/Tipo])
        UC3([Realizar Pedido])
        UC4([Acompanhar Status do Pedido])
    end

    subgraph "Gestão do Expositor"
        direction TB
        UC5([Gerenciar Produtos])
        UC6([Gerenciar Pedidos Recebidos])
        UC7([Atualizar Status do Pedido])
        UC8([Confirmar Pagamento])
        UC9([Visualizar Dashboard de Vendas])
    end

    subgraph "Administração"
        direction TB
        UC10([Gerenciar Alunos/Usuários])
        UC11([Gerenciar Equipes/Expositores])
        UC12([Visualizar Dashboard Geral])
    end

    %% Relacionamentos Consumidor
    C --> UC1
    C --> UC2
    C --> UC3
    C --> UC4

    %% Relacionamentos Expositor
    E --> UC5
    E --> UC6
    E --> UC7
    E --> UC8
    E --> UC9
    E -.-> UC1

    %% Relacionamentos Admin
    A --> UC10
    A --> UC11
    A --> UC12
    A -.-> UC1
```

## Descrição dos Atores

1.  **Consumidor**: Usuário final que navega pela feira, visualiza produtos e realiza compras.
2.  **Expositor**: Aluno ou equipe responsável por um estande. Gerencia seus produtos, atende pedidos e acompanha suas vendas.
3.  **Administrador**: Responsável pela organização do evento. Cadastra alunos, forma equipes e monitora o desempenho geral da feira.
