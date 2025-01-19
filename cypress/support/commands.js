Cypress.Commands.add(
  "create",
  (firstname, lastname, email, password, password_confirmation) => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type(firstname);
    cy.get("#lastname").type(lastname);
    cy.get("#password").type(password);
    cy.get("#email_address").type(email);
    cy.get("#password-confirmation").type(password_confirmation);
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  }
);
