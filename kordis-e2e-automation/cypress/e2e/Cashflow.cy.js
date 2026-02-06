import CashFlow from '../support/Cashflow-page';
describe('Kordis web app Login Flow', function () {
  const custom = new CashFlow;
    beforeEach(function () {
      cy.fixture('example').then(function(testdata){
      this.testdata = testdata
       // Uncaught error events off
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      }); 
    });
    cy.viewport(1440, 800)
});

it('Ensure the financials test cases with Default model and toggle scenario', function() {
  custom.openURL();
  custom.enterEmail(this.testdata.username.kordisuser);
  custom.enterPassword(this.testdata.password.kordispass);
  custom.Signin();
  custom.cashflowclick();
 //custom.createforecast();
  custom.Tableview()
  custom.logout();


})


})