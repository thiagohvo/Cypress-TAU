// cypress/integration/api.spec.js
/// <reference types="cypress" />

describe('Testes de API', () => {
  it('deve fazer login via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://example.cypress.io/api/login',
      body: {
        email: 'teste@example.com',
        password: 'senha123'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      
      // Armazenar token para uso em outros testes
      cy.wrap(response.body.token).as('authToken');
    });
  });

  it('deve listar usuários via API', () => {
    cy.request('GET', 'https://example.cypress.io/api/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array');
        expect(response.body.data.length).to.be.greaterThan(0);
      });
  });

  it('deve criar um novo usuário via API', () => {
    const user = {
      name: 'Usuário Teste',
      email: `teste${Math.floor(Math.random() * 10000)}@example.com`,
      password: 'Senha@123'
    };

    cy.request({
      method: 'POST',
      url: 'https://example.cypress.io/api/users',
      body: user
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq(user.name);
      expect(response.body.email).to.eq(user.email);
    });
  });

  it('deve atualizar dados do usuário via API', () => {
    // Primeiro criar um usuário
    const user = {
      name: 'Usuário Para Atualizar',
      email: `atualizar${Math.floor(Math.random() * 10000)}@example.com`,
      password: 'Senha@123'
    };

    cy.request({
      method: 'POST',
      url: 'https://example.cypress.io/api/users',
      body: user
    }).then((response) => {
      const userId = response.body.id;
      
      // Atualizar o usuário
      cy.request({
        method: 'PUT',
        url: `https://example.cypress.io/api/users/${userId}`,
        body: {
          name: 'Nome Atualizado'
        }
      }).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);
        expect(updateResponse.body.name).to.eq('Nome Atualizado');
        expect(updateResponse.body.email).to.eq(user.email);
      });
    });
  });
});
