// cypress/support/pages/LoginPage.js

class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('#email')
      .type(email)
      .should('have.value', email);
    return this;
  }

  fillPassword(password) {
    cy.get('#senha')
      .type(password);
    return this;
  }

  submit() {
    cy.get('#btn-login').click();
  }

  forgotPassword() {
    cy.get('#link-esqueci-senha').click();
  }

  loginWithValidCredentials(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
    // Verificar que o login foi bem-sucedido
    cy.url().should('include', '/dashboard');
  }

  verifyErrorMessage(message) {
    cy.get('.mensagem-erro')
      .should('be.visible')
      .and('contain', message);
  }
}

export default LoginPage;
