describe('magento shoping cart', () => {
  beforeEach(() => {
    cy.visit('')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory')
    //cy.get('[data-test="eror"]').should('contain,text','products')
  })
    it('Add to cart1', () => {
      cy.get('.inventory_item button').first().click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('.shopping_cart_badge').should('be.visible')
      //cy.get().should('have.text','sadface:add is required')
      //cy.get(':nth-child(1) > [data-test="inventory-item-description"]')
    })
    it('Add to cart2', () => {
      cy.get('.inventory_item button').eq(1).click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('.shopping_cart_badge').should('be.visible')
    })
    it('Add to cart3', () => {
      cy.get('.inventory_item button').eq(2).click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('.shopping_cart_badge').should('be.visible')
    })
    it('Add to cart3', () => {
      cy.get('.inventory_item button').eq(3).click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('.shopping_cart_badge').should('be.visible')
    })

})
