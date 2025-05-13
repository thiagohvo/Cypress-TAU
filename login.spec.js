// cypress/integration/login.spec.js
// <reference types="cypress" />

describe('Funcionalidade de Login', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('deve fazer login com credenciais válidas', () => {
    cy.fixture('usuario').then((usuario) => {
      cy.get('.action-email')
        .type(usuario.email)
        .should('have.value', usuario.email);

      cy.get('.action-focus')
        .type(usuario.senha);

      cy.get('.action-btn')
        .click();

      // Verificar que o login foi bem-sucedido
      cy.get('.action-form')
        .should('contain', 'Form submitted');
    });
  });

  it('deve exibir mensagem de erro para credenciais inválidas', () => {
    cy.get('.action-email')
      .type('usuario_invalido@example.com')
      .should('have.value', 'usuario_invalido@example.com');

    cy.get('.action-focus')
      .type('senha_incorreta');

    cy.get('.action-btn')
      .click();

    // Aqui você verificaria a mensagem de erro
    // Este é um exemplo, ajuste conforme a aplicação real
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'Credenciais inválidas');
  });

  it('deve validar o formato de email', () => {
    cy.get('.action-email')
      .type('email_invalido')
      .blur();

    // Verificar que o campo mostra erro de validação
    cy.get('.action-email')
      .should('have.class', 'error');
  });
});
