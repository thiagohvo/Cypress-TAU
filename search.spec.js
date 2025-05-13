// cypress/integration/busca.spec.js
/// <reference types="cypress" />

describe('Funcionalidade de Busca', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('deve exibir resultados para busca válida', () => {
    // Digitar termo de busca
    cy.get('.search-input')
      .type('produto{enter}');
    
    // Verificar que resultados são exibidos
    cy.get('.search-results')
      .should('be.visible');
    
    cy.get('.product-item')
      .should('have.length.greaterThan', 0);
  });

  it('deve filtrar produtos por categoria', () => {
    // Selecionar categoria
    cy.get('.category-select')
      .select('Eletrônicos');
    
    // Verificar que produtos da categoria são exibidos
    cy.get('.product-category')
      .should('contain', 'Eletrônicos');
  });

  it('deve exibir mensagem quando não há resultados', () => {
    // Buscar termo que não existe
    cy.get('.search-input')
      .type('xyzabcdefg{enter}');
    
    // Verificar mensagem de nenhum resultado
    cy.get('.no-results-message')
      .should('be.visible')
      .and('contain', 'Nenhum resultado encontrado');
  });

  it('deve ordenar resultados por preço', () => {
    // Buscar produtos
    cy.get('.search-input')
      .type('produto{enter}');
    
    // Ordenar por preço: menor para maior
    cy.get('.sort-select')
      .select('price-asc');
    
    // Verificar ordenação
    cy.get('.product-price').then($prices => {
      const prices = $prices.map((i, el) => {
        return parseFloat(Cypress.$(el).text().replace('R$', '').trim());
      }).get();
      
      // Verificar se os preços estão em ordem crescente
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  });
});
