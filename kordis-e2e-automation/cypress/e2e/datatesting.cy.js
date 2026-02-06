/*import Login from '../support/Login-page'
import Financial from '../support/Fin-page';
import datatesting from '../support/datatest';
import 'cypress-table';
describe('Kordis web app Login Flow', function () {
  const login = new Login
  const fintest = new Financial;
  const datatest=new datatesting;
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
login.OpenURL(this.testdata.url.Live);
login.enterEmail(this.testdata.username.kordisuser);
  login.enterPassword(this.testdata.password.kordispass);
  login.Signin()
  cy.wait(4000) 
// datatest.changeorg();
//// datatest.dataset();
 datatest.logout();
  
       
})


  });*/