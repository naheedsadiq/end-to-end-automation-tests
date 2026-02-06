import ManageOrg from '../support/ManageOrg-page';
describe('Kordis web app Login Flow', function () {
  const fintest = new ManageOrg
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
    cy.viewport(1400, 760)
});

it('Ensure the financials test cases with Default model and toggle scenario', function() {
  fintest.openURL();
  fintest.enterEmail(this.testdata.username.Live);
  fintest.enterPassword(this.testdata.password.kordisuser);
  fintest.Signin();
  fintest.manage_org();
  fintest.create_org();
  fintest.Edit();

  
  
  fintest.logout()
  
})


  });