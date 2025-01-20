import magentoPage from "../../support/pageObject/magentoPage"

describe('Magento Update Scenarios', () => {
    beforeEach(() => {
        cy.visit('')
    })
    function randomEmail(){
        const randomString = Math.random().toString(36).substring(2,9)
        const email = randomString + "@mailinator.com"
        return email
    }
    describe('Update Functionality', () => {
        it('update success', () => {
            // login
            cy.fixture('users.json').then((users) => {
                const datauser = users[0];
                magentoPage.login(datauser.email, datauser.password)
            })
            // check already logged in and show the user profile button
            cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'sanbercode')

            cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
            cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
            cy.get('.base').should('contain.text', 'My Account')
            
            // edit account information
            cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()

            // input new information & clear current input
            cy.get('#firstname').clear()
            cy.get('#firstname').type('testing_quiz_2_updated')
            // cy.get('#lastname').clear()
            // cy.get('#lastname').type('sanbercode_updated')
            // using custom commands
            cy.ketik('#lastname', 'sanbercode_updated')
            // cy.get('#firstname').type('testing_quiz_2')
            // cy.get('#lastname').type('sanbercode')
            cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
            cy.get('.message-success > div').should('contain.text', 'You saved the account information.')
        })
        it('update failed current password not match on change password', () => {
            // login
            cy.get('.panel > .header > .authorization-link > a').click()
            cy.get('#email').type('iw2atov@mailinator.com')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Ap4hay0!')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
            // check already logged in and show the user profile button
            cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'sanbercode')
            cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
            cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
            cy.get('.base').should('contain.text', 'My Account')
            // edit account information
            cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()

            cy.get('#change-password').click()
            // type new password & confirm new password
            cy.get('#password').type('Ap4hay0!b4rU')
            cy.get('#password-confirmation').type('Ap4hay0!b4rU')

            // cy.get('#current-password').type('Ap4hay0!')
            cy.get('#current-password').type('1')
            cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
            cy.get('.message-error > div').should('contain.text', "The password doesn't match this account. Verify the password and try again.")
        })
    })
})