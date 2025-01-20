import magentoPage from "../../support/pageObject/magentoPage"

describe('Magento Update Scenarios', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('update success edit firstname and lastname', () => {
        // login
        cy.fixture('users.json').then((users) => {
            const datauser = users[0];
            magentoPage.login(datauser.email, datauser.password)

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
    })

    it('update failed current password not match on change password', () => {
        // login
        cy.fixture('users.json').then((users) => {
            const datauser = users[0];
            magentoPage.login(datauser.email, datauser.password)

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
    
    it('update success edit address', () => {
        // login
        cy.fixture('users.json').then((users) => {
            const datauser = users[0];
            magentoPage.login(datauser.email, datauser.password)

            // check already logged in and show the user profile button
            cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'sanbercode')

            // klik user profile to update information data (using POM)
            magentoPage.check_is_logged_in()
            
            // edit address (using custom commands)
            cy.klik('.box-billing-address > .box-actions > .action > span')

            // input new information & clear current input (using custom commands)
            cy.ketik('#company', datauser.company)
            cy.ketik('#telephone', datauser.telephone)
            cy.ketik('#street_1', datauser.street_1)
            cy.ketik('#street_2', datauser.street_2)
            cy.ketik('#street_3', datauser.street_3)
            cy.ketik('#city', datauser.city)
            // cy.select_option('#region_id', datauser.region_id)
            cy.ketik('#region', datauser.region)
            cy.ketik('#zip', datauser.zip)
            cy.select_option('#country', datauser.country)
            
            // klik save
            cy.klik('#form-validate > .actions-toolbar > div.primary > .action > span')
            cy.get('.message-success > div').should('contain.text', 'You saved the address.')
        })
    })

    it('update failed edit address', () => {
        // login
        cy.fixture('users.json').then((users) => {
            const datauser = users[0];
            magentoPage.login(datauser.email, datauser.password)

            // check already logged in and show the user profile button
            cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'sanbercode')

            // klik user profile to update information data (using POM)
            magentoPage.check_is_logged_in()
            
            // edit address (using custom commands)
            cy.klik('.box-billing-address > .box-actions > .action > span')

            // input new information & clear current input (using custom commands)
            cy.ketik('#company', datauser.company)
            cy.ketik('#telephone', datauser.telephone)
            cy.ketik('#street_1', datauser.street_1)
            cy.ketik('#street_2', datauser.street_2)
            cy.ketik('#street_3', datauser.street_3)
            cy.ketik('#city', datauser.city)
            // cy.select_option('#region_id', datauser.region_id)
            cy.ketik('#region', datauser.region)
            cy.ketik('#zip', ' ')
            cy.select_option('#country', datauser.country)
            
            // klik save
            cy.klik('#form-validate > .actions-toolbar > div.primary > .action > span')
            cy.get('#zip-error').should('contain.text', 'This is a required field.')
        })
    })
})