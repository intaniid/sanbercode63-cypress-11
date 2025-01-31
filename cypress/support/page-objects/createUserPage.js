class CreateUserPage {
  visit() {
    cy.visit("/customer/account/create/");
  }

  fillFirstName(firstName) {
    cy.get('input[name="firstname"]').type(firstName);
  }

  fillLastName(lastName) {
    cy.get('input[name="lastname"]').type(lastName);
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPassword(password) {
    cy.get("#password").type(password);
  }

  fillPasswordConfirmation(passwordConfirmation) {
    cy.get('input[name="password_confirmation"]').type(passwordConfirmation);
  }

  submit() {
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
  }
}

export default new CreateUserPage();
