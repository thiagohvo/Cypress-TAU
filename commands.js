// cypress/support/commands.js

// Comando personalizado para login
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login');
  cy.get('#email').type(email);
  cy.get('#senha').type(senha);
  cy.get('#btn-login').click();
});

// Comando para criar um usuário via API
Cypress.Commands.add('criarUsuarioViaAPI', (usuario) => {
  cy.request({
    method: 'POST',
    url: '/api/usuarios',
    body: usuario
  }).then((response) => {
    expect(response.status).to.eq(201);
    return response.body;
  });
});

// Comando para verificar se elemento está visível após carregamento
Cypress.Commands.add('aguardarElemento', (seletor, timeout = 10000) => {
  cy.get(seletor, { timeout }).should('be.visible');
});

// Comando para selecionar produto do catálogo
Cypress.Commands.add('selecionarProduto', (nomeProduto) => {
  cy.get('.produto-item')
    .contains(nomeProduto)
    .click();
});

// Comando para adicionar produto ao carrinho
Cypress.Commands.add('adicionarAoCarrinho', () => {
  cy.get('#btn-adicionar-carrinho').click();
  cy.get('.mensagem-sucesso').should('be.visible');
});

// Comando para verificar total do carrinho
Cypress.Commands.add('verificarTotalCarrinho', (valorEsperado) => {
  cy.get('#total-carrinho')
    .should('contain', valorEsperado);
});
