export class Login{
    OpenURL(Live){
        return cy.visit(Live);
    }
    enterEmail(kordisuser){
        cy.get('input#email').click()
    cy.get('input#email').type(kordisuser)
    }
    enterPassword(password){
        cy.get('#password').click();
        cy.get('#password').type(password);
    }
    Signin(){
        cy.get('.authButton, .login-submit-btn').first().click()
    }
    invalidEmail(){
        cy.get('input#email').click()
        cy.get('input#email').type('nahid@kordi.io')
    }
    invalidpass(){
        cy.get('#password').click();
        cy.get('#password').type('12345hfhf')
    }
    blankpass(){
        cy.get('#password').click();
    }
    blankemail(){
        cy.get('input#email').click()
    }
    logout(){
        // Wait for post-login state instead of fixed time; consider replacing .sc-iTOPbJ with a data-* selector
        cy.get('#logout-form > .sc-iTOPbJ').click({ force: true })
        cy.url().should('match', /login|signin|auth/i)
    }

}
export default Login


