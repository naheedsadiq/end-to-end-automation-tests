import ShortKeys from '../support/Spreadsheet-shortcuts-page';
describe('Kordis web app Login Flow', function () {
  const fintest = new ShortKeys;
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
 fintest.enterEmail(this.testdata.username.kordisuser);
  fintest.enterPassword(this.testdata.password.kordispass);
  fintest.Signin();
/*  fintest.SpreadSheetV2();
  fintest.viewModel();
  fintest.shortkeys()
 // fintest.Formatting();
  fintest.Delete()
// fintest.Text_alignment()*/


})
})