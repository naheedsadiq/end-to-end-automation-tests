/*import Managemodel from '../support/managemodel-page';
describe('Create model under manage models ', function () {
  const model = new Managemodel
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
it('Create the new model', function() {
    model.OpenURL(this.testdata.url.Live);
    model.enterEmail(this.testdata.username.kordisuser);
    model.enterPassword(this.testdata.password.kordispass);
    model.Signin();
    model.manage()
    model.createmodel();
    cy.wait(3000)
})
it('Update /Edit the existing model ', function() {
  model.updatemodel();
})
it('Search and Delete the model that created before', function() {
    model.searchmodel();
  model.deletemodel();
  cy.wait(3000)
  model.logout()
})

})
*/