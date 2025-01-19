// import CreateUserPage from "../../support/page_objects/CreateUserPage";

describe("Register Account", () => {
  it("Succefully Home Page", () => {
    cy.visit("");
  });

  it("Click Create Account", () => {
    cy.visit("/");
    cy.contains("Create an Account").click();

    cy.url().should("include", "/customer/account/create/");
  });

  it.only("Fill All Create Account", () => {
    // Menggunakan metode command
    // cy.create("Abdul", "Halim", "abdulhalim@gmail.com", "Bagja123", "Bagja123");
    cy.visit("/customer/account/create/");

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
});
