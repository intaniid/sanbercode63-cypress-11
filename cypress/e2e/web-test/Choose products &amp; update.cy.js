import magentoPage from "../../support/pageObject/magentoPage"

describe('Choose product', () => {
    beforeEach(() => {
        cy.visit('')
    }) 
    describe('Choose product', () => {
        it(' success login', () => {
            // login
                magentoPage.login("damayantiintani@gmail.com", "Qwerty27*")
            
            // choose product
            cy.visit('https://magento.softwaretestingboard.com/argus-all-weather-tank.html')
            cy.get('#option-label-size-143-item-168')
            cy.get('#option-label-color-93-item-52')
            cy.get('#product-addtocart-button')            
     })
     it(' success login without select colour', () => {
      // login
         magentoPage.login("damayantiintani@gmail.com", "Qwerty27*")

      
      // choose product
      cy.visit('https://magento.softwaretestingboard.com/argus-all-weather-tank.html')
      cy.get('#option-label-size-143-item-168')
      cy.get('#product-addtocart-button')
      
})
    })
})