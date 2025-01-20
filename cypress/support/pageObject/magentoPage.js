class magentoPage {
    login(email, password) {
        cy.klik('.panel > .header > .authorization-link > a')
        cy.ketik('#email', email)
        cy.ketik('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass', password)
        cy.klik('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
    }

    check_is_logged_in() {
        cy.klik(':nth-child(2) > .customer-welcome > .customer-name > .action')
        cy.klik(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a')
        cy.get('.base').should('contain.text', 'My Account')
    }
}
module.exports = new magentoPage()