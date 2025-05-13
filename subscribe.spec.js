// cypress/integration/cadastro.spec.js
/// <reference types="cypress" />

describe('Funcionalidade de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('deve cadastrar um novo usuário com sucesso', () => {
    const usuario = {
      nome: 'Usuario Teste',
      email: `teste${Math.floor(Math.random() * 10000)}@example.com`,
      senha: 'Senha@123',
      confirmaSenha: 'Senha@123'
    };

    // Preencher formulário de cadastro
    cy.get('.action-email')
      .type(usuario.email);
    
    cy.get('.action-input')
      .type(usuario.nome);
    
    cy.get('.action-focus')
      .type(usuario.senha);
    
    // Checkbox de termos e condições
    cy.get('.action-checkbox')
      .check();
    
    // Submeter formulário
    cy.get('.action-btn')
      .click();
    
    // Verificar mensagem de sucesso
    cy.get('.action-form')
      .should('contain', 'Form submitted');
  });

  it('deve validar campos obrigatórios', () => {
    // Tentar submeter sem preencher campos
    cy.get('.action-btn')
      .click();
    
    // Verificar mensagens de validação
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'Preencha os campos obrigatórios');
  });

  it('deve validar senha forte', () => {
    cy.get('.action-email')
      .type('teste@example.com');
    
    cy.get('.action-focus')
      .type('123') // Senha fraca
      .blur();
    
    // Verificar mensagem de validação
    cy.get('.password-validation')
      .should('be.visible')
      .and('contain', 'A senha deve conter pelo menos 8 caracteres');
  });
});
