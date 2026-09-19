# Projeto Node.js — IFRR

Projeto didático desenvolvido para praticar os fundamentos do **Node.js** com exemplos pequenos, objetivos e executáveis localmente. O material acompanha os conteúdos introdutórios da disciplina/apostila do IFRR.

## Objetivos de aprendizagem

- Criar servidores HTTP usando o módulo nativo `http`;
- Trabalhar com respostas em texto e HTML;
- Organizar código com módulos locais usando `require`;
- Ler URLs e parâmetros de consulta (*query parameters*).

## Tecnologias

- [Node.js](https://nodejs.org/)
- JavaScript

O projeto não possui dependências externas.

## Pré-requisitos

Tenha o [Node.js](https://nodejs.org/) instalado. Para confirmar a instalação, execute:

```bash
node --version
```

## Como executar

1. Clone ou baixe este repositório.
2. No terminal, acesse a pasta do projeto.
3. Execute um dos exemplos:

```bash
node index.js
```

4. Abra `http://localhost:5000` no navegador.

Para encerrar o servidor, pressione `Ctrl + C` no terminal.

> Todos os exemplos usam a porta `5000`. Execute apenas um servidor por vez.

## Exemplos disponíveis

| Arquivo | Demonstração | Como executar |
| --- | --- | --- |
| `index.js` | Servidor HTTP básico com resposta de texto | `node index.js` |
| `executa_http.js` | Resposta simples do servidor | `node executa_http.js` |
| `executa_http_url.js` | Exibição da URL requisitada | `node executa_http_url.js` |
| `executa_modulo.js` | Uso do módulo local `meuprimeiromodulo.js` | `node executa_modulo.js` |
| `executa_query.js` | Leitura de parâmetros da URL | `node executa_query.js` |

Ao executar `executa_query.js`, acesse, por exemplo:

```text
http://localhost:5000/?ano=2025&mes=Maio
```

## Estrutura do projeto

```text
.
├── index.js                 # Servidor HTTP inicial
├── executa_http.js          # Exemplo de resposta HTTP
├── executa_http_url.js      # Exemplo de leitura da URL
├── executa_modulo.js        # Exemplo de módulo local no servidor
├── executa_query.js         # Exemplo de parâmetros de consulta
├── meuprimeiromodulo.js     # Módulo que retorna data e hora
└── package.json             # Metadados e scripts do projeto
```

## Autora

Letícia Alves

---

Projeto criado para fins educacionais.
