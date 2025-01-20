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
        it('update success edit firstname and lastname', () => {
            // login
            cy.fixture('users.json').then((users) => {
                const datauser = users[0];
                magentoPage.login(datauser.email, datauser.password)
            })
            // check already logged in and show the user profile button
            cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'sanbercode')

            // klik user profile to update information data (using POM)
            magentoPage.check_is_logged_in()
            
            // edit account information (using custom commands)
            cy.klik('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span')

            // input new information & clear current input (using custom commands)
            cy.ketik('#firstname', datauser.firstname)
            cy.ketik('#lastname', datauser.lastname)
            
            // klik save
            cy.klik('#form-validate > .actions-toolbar > div.primary > .action > span')
            cy.get('.message-success > div').should('contain.text', 'You saved the account information.')
        })
        it('update failed current password not match on change password', () => {
            // login
            cy.fixture('users.json').then((users) => {
                const datauser = users[0];
                magentoPage.login(datauser.email, datauser.password)
            })
            // check already logged in and show the user profile button
            cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'sanbercode')

            // klik user profile to update information data (using POM)
            magentoPage.check_is_logged_in()

            // edit account information (using custom commands)
            cy.klik('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span')

            // klik ceklis change password (using custom commands)
            cy.klik('#change-password')
            // type new password & confirm new password
            cy.ketik('#password', datauser.new_password)
            cy.ketik('#password-confirmation', datauser.new_password)
            
            cy.ketik('#current-password', '1')

            // klik save
            cy.klik('#form-validate > .actions-toolbar > div.primary > .action > span')
            cy.get('.message-error > div').should('contain.text', "The password doesn't match this account. Verify the password and try again.")
        })
    })
})