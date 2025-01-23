describe('Tetsting Shopping cart', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    cy.get('#email').type('mfahry861@gmail.com');
    cy.get('#pass').type('Muhammad-fahry');
    cy.get('#send2').click();
  });

  
});