/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })

  });

  it('Deve cadastrar endereço de faturamento com sucesso', () => {
  });

});