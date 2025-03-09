/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

  beforeEach(() => {
    cy.visit('produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get(' [class="product-block grid"]')
      //.first()
      //.last()
      //.eq(3)
      .contains('Ariel Roll Sleeve Sweatshirt')
      .click()
  });

  it('Deve adicionar o produto ao carrinho', () => {
    var quantidade = 10

    cy.get(' [class="product-block grid"]')
      .contains('Ariel Roll Sleeve Sweatshirt').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

  });

  it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Yellow', 3)
  });

  it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Argus All-Weather Tank', 'L', 'Gray', 5)
  });

});