import Login from '../support/Login-page'
describe('Kordis IO web app Login All Negative Test Cases Flow', function () {
  const login= new Login
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
    cy.viewport(1300, 760)
});

it('Verify that user cannot login with invalid email and invalid password',function () {
  login.OpenURL(this.testdata.url.Live);
  login.invalidEmail(this.testdata.username.invalidemail);
  login.invalidpass(this.testdata.username.invalidpass);
  login.Signin();
   cy.contains('Wrong Email.').should("be.visible")   
   cy.wait(3000)
})
it('Verify that user cannot login with valid email and invalid password',function(){
  login.OpenURL(this.testdata.url.Live);
  login.enterEmail(this.testdata.username.kordisuser);
  login.invalidpass(this.testdata.username.invalidpass);
  login.Signin();
  cy.contains('These credentials do not match our records.').should("be.visible")   
  cy.wait(3000)

})
it('Verify that user cannot login with valid email and Blank password',function (){
  login.OpenURL(this.testdata.url.Live);
  login.enterEmail(this.testdata.username.kordisuser);
  login.blankpass(this.testdata.username.blankpass);
  login.Signin();
  cy.wait(3000)

})
it('Verify that user cannot login with empty email and Valid password',function (){
  login.OpenURL(this.testdata.url.Live);
  login.blankemail(this.testdata.username.blankemail);
  login.enterPassword(this.testdata.password.kordispass);
  login.Signin();
  cy.wait(3000)

})
it('Verify that user cannot login with empty email and empty password',function (){
  login.OpenURL(this.testdata.url.Live);
  login.blankemail(this.testdata.username.blankemail);
  login.blankpass(this.testdata.username.blankpass);
  login.Signin();
  cy.wait(3000)
})

  });