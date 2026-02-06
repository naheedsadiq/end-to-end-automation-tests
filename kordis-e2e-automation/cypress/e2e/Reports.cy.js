import Reports from '../support/Reports-page';
describe('Kordis web app Login Flow', function () {
  const repo = new Reports;
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

it('Ensure the Reports creation, copy and delete functioning properly', function() {
  repo.openURL();
 repo.enterEmail(this.testdata.username.kordisuser);
 repo.enterPassword(this.testdata.password.kordispass);
 repo.Signin();
 repo.reportsclick();
 repo.delete();

  repo.logout();


})


})