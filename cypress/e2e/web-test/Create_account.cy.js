import CreateUserPage from "../../support/page-objects/createUserPage";

describe("Register Account", () => {
  it("Succefully Home Page", () => {
    cy.visit("");
  });

  it("Click Create Account", () => {
    cy.visit("/");
    cy.contains("Create an Account").click();

    cy.url().should("include", "/customer/account/create/");
  });

  beforeEach(() => {
    cy.visit("/customer/account/create/");
  });

  it("Fill All Create Account", () => {
    // Menggunakan metode command
    // cy.create("Abdul", "Halim", "abdulhalim@gmail.com", "Bagja123", "Bagja123");
    // cy.visit("/customer/account/create/");

    // Menggunakan metode fixture
    cy.fixture("create_user.json").then((create_user) => {
      const dataUser = create_user[0];
      function randomEmail() {
        return Math.random().toString(36).substring(2) + "@gmail.com";
      }
      dataUser.email = randomEmail();

      cy.create(
        dataUser.firstname,
        dataUser.lastname,
        dataUser.email,
        dataUser.password,
        dataUser.password_confirmation
      );
    });

    // Menggunakan metode page object
    // CreateUserPage.visit();
    // CreateUserPage.fillFirstName("Abdul");
    // CreateUserPage.fillLastName("Halim");
    // CreateUserPage.fillEmail(randomEmail());
    // CreateUserPage.fillPassword("Bagja123");
    // CreateUserPage.fillPasswordConfirmation("Bagja123");
    // CreateUserPage.submit();

    cy.url().should("include", "/customer/account");
    cy.contains("Thank you for registering with Main Website Store.");
  });

  it("Create None Fill", () => {
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
    cy.url().should("include", "/customer/account/create/");
    cy.get("#firstname-error").contains("This is a required field.");
    cy.get("#lastname-error").contains("This is a required field.");
    cy.get("#email_address-error").contains("This is a required field.");
    cy.get("#password-error").contains("This is a required field.");
    cy.get("#password-confirmation-error").contains(
      "This is a required field."
    );
  });

  it("Fill Duplicate", () => {
    //Menggunakan metode normal
    cy.get("#firstname").type("Abdul");
    cy.get("#lastname").type("Halim");
    cy.get("#password").type("Bagja123");
    cy.get("#email_address").type("abdulhalim@gmail.com");
    cy.get("#password-confirmation").type("Bagja123");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
    cy.url().should("include", "/customer/account/create/");
    cy.get(".message-error").contains(
      "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account."
    );
  });

  it("Fill different Password and Pass Confirm", () => {
    // CreateUserPage.visit();
    CreateUserPage.fillFirstName("Abdul");
    CreateUserPage.fillLastName("Halim");
    CreateUserPage.fillEmail("abdulhalim@gmail.com");
    CreateUserPage.fillPassword("Bagja123");
    CreateUserPage.fillPasswordConfirmation("DifferentBagja123");
    CreateUserPage.submit();

    // Add an assertion to check for the error message
    cy.get("#password-confirmation-error").contains(
      "Please enter the same value again."
    );
  });

  it("Fill email without type email", () => {
    CreateUserPage.fillFirstName("Abdul");
    CreateUserPage.fillLastName("Halim");
    CreateUserPage.fillEmail("abdulhalim");
    CreateUserPage.fillPassword("Bagja123");
    CreateUserPage.fillPasswordConfirmation("Bagja123");
    CreateUserPage.submit();

    // Add an assertion to check for the error message
    cy.get("#email_address-error").contains(
      "Please enter a valid email address"
    );
  });

  it("Password less than 8", () => {
    CreateUserPage.fillFirstName("Abdul");
    CreateUserPage.fillLastName("Halim");
    CreateUserPage.fillEmail("AbdulHalim1@gmail.com");
    CreateUserPage.fillPassword("Bag");
    CreateUserPage.fillPasswordConfirmation("Bag");
    CreateUserPage.submit();

    // Add an assertion to check for the error message
    cy.get("#password-error").contains(
      "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."
    );
  });

  it.only("Fill Duplicate Email", () => {
    CreateUserPage.fillFirstName("Abdul");
    CreateUserPage.fillLastName("Jabar");
    CreateUserPage.fillEmail("Abdulhalim@gmail.com");
    CreateUserPage.fillPassword("Bagja1234");
    CreateUserPage.fillPasswordConfirmation("Bagja1234");
    CreateUserPage.submit();

    // Add an assertion to check for the error message
    cy.get(".message-error").contains(
      "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account."
    );
  });

  it("Same Password then click forgot password ", () => {
    CreateUserPage.fillFirstName("Abdul");
    CreateUserPage.fillLastName("Halim");
    CreateUserPage.fillEmail("Abdulhalim@gmail.com");
    CreateUserPage.fillPassword("Bagja1234");
    CreateUserPage.fillPasswordConfirmation("Bagja1234");
    CreateUserPage.submit();

    cy.get(".message-error").click();
  });
});
