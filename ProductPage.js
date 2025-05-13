// cypress/support/pages/ProdutoPage.js

class ProdutoPage {
  visit(produtoId) {
    cy.visit(`/produtos/${produtoId}`);
  }

  getProdutoTitulo() {
    return cy.get('.produto-titulo');
  }

  getProdutoPreco() {
    return cy.get('.produto-preco');
  }

  getProdutoDescricao() {
    return cy.get('.produto-descricao');
  }

  adicionarAoCarrinho() {
    cy.get('#btn-adicionar-carrinho').click();
    return this;
  }

  verificarMensagemAdicionado() {
    cy.get('.mensagem-sucesso')
      .should('be.visible')
      .and('contain', 'Produto adicionado ao carrinho');
  }

  selecionarQuantidade(quantidade) {
    cy.get('#quantidade-produto')
      .clear()
      .type(quantidade)
      .should('have.value', quantidade);
    return this;
  }

  selecionarOpcao(opcao) {
    cy.get('#opcao-produto')
      .select(opcao);
    return this;
  }

  irParaCarrinho() {
    cy.get('#btn-ir-carrinho').click();
  }
}

export default ProdutoPage;
