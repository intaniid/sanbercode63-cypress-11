// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("ketik", (locator, text) => {
  cy.get(locator).should("be.visible").clear().type(text);
});

Cypress.Commands.add("klik", (locator) => {
  cy.get(locator).should("be.visible").click();
});

Cypress.Commands.add("select_option", (locator, text) => {
  cy.get(locator).select(text)
});

Cypress.Commands.add(
  "create",
  (firstname, lastname, email, password, password_confirmation) => {
    // cy.visit("/customer/account/create/");
    cy.get("#firstname").type(firstname);
    cy.get("#lastname").type(lastname);
    cy.get("#password").type(password);
    cy.get("#email_address").type(email);
    cy.get("#password-confirmation").type(password_confirmation);
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  }

  // Cypress.Commands.add('LoginSaucedemo', (username, Password) => { 
    //cy.get('#user-name').type(username)
    //cy.get('#password').type(password)
    //cy.get('#login-button').click()
  //})
);
