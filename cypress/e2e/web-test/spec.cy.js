describe('Saucedemo Login Scenarios', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('login success', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="title"]').should('contain.text','Products')
  })
  it('login failed - empty username', () => {
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
  })
  it('login failed - empty password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
  })
  it('login failed - locked user', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })
})