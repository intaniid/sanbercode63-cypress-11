describe('Magento Login Scenarios', () => {
    beforeEach(() => {
      cy.visit('')
    })
    it('login success', () => {
      cy.klik('.panel > .header > .authorization-link > a')
      cy.get('#email').type('magfiratesting@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('admin123_')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })

    it('login failed - empty email', () => {
      cy.klik('.panel > .header > .authorization-link > a')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('admin123_')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })

    it('login failed - empty password', () => { 
      cy.klik('.panel > .header > .authorization-link > a')
      cy.get('#email').type('magfiratesting@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    }) 

    it('login failed - empty email & password', () => { 
      cy.klik('.panel > .header > .authorization-link > a')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    }) 
  })