# Projeto de Testes Automatizados – Trier / SauceDemo

Instruções de instalação e execução
- Pré-requisitos
- Node.js instalado (versão LTS recomendada).
- Cypress instalado globalmente ou via dependência do projeto.
- Instalação
npm install
- Execução dos testes
- Para abrir a interface gráfica do Cypress:
npx cypress open
- Para rodar os testes em modo headless:
npx cypress run

 Arquitetura escolhida
- Separação de responsabilidades:
- Arquivo principal organiza os cenários de teste.
- Funções auxiliares (login_cypress_trier.js, compras_cypress_trier.js, logout_cypress_trier.js) encapsulam rotinas específicas.
- Estrutura modular: facilita manutenção e reutilização de código.
- Uso de beforeEach: garante que cada teste comece em estado limpo, visitando a página inicial.

Estratégia de testes adotada
- Testes funcionais: validar login, fluxo de compras e logout.
- Testes negativos: verificar comportamento de usuários bloqueados ou com falhas.
- Testes de interface: checar visibilidade de elementos e mensagens de erro.
- Testes de fluxo completo: adicionar/remover itens do carrinho, finalizar compra e retornar à loja.

Justificativa das decisões técnicas
- Cypress: escolhido por sua simplicidade, integração com JavaScript e forte suporte para testes end-to-end.
- Modularização: melhora a legibilidade e facilita a expansão futura.
- Uso de asserts (should, contains): garante validação clara e confiável dos elementos da aplicação.
- Cobertura de diferentes perfis de usuário: assegura que o sistema seja testado em múltiplos cenários, simulando problemas reais.

Erros encontrados nos usuários de teste
Durante a execução dos testes, foram observados os seguintes comportamentos específicos:
- locked_out_user: não consegue realizar login, exibindo mensagem de erro.
- problem_user: falhas visuais e funcionais, como impossibilidade de adicionar ou remover determinados itens do carrinho.
- performance_glitch_user: lentidão perceptível no carregamento e execução das ações.
- error_user: inconsistências graves, como itens já presentes no carrinho sem possibilidade de remoção, além de falhas ao adicionar novos produtos.
- visual_user: problemas de layout e interface, afetando a experiência visual do usuário.
Esses cenários foram documentados diretamente nos testes para evidenciar os diferentes tipos de falhas simuladas pelo SauceDemo.

 Pontos de melhoria com mais tempo
- Implementar Page Objects para separar lógica de testes da manipulação de elementos.
- Adicionar relatórios automatizados (ex.: Mochawesome, Allure).
- Configurar pipeline CI/CD para execução automática dos testes em cada commit.
- Expandir cenários para incluir testes de responsividade e performance.
- Criar mocks de API para validar integração sem depender do ambiente externo.

