class magentoPage {
    login(email, password) {
        cy.get('.panel > .header > .authorization-link > a').click()
        // cy.get('#email').type('iw2atov@mailinator.com')
        cy.ketik('#email', email)
        // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Ap4hay0!')
        cy.ketik('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass', password)
        // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.klik('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
    }
}
module.exports = new magentoPage()