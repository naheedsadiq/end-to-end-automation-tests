export class SignUp{
    OpenURL(Live){
        return cy.visit(Live);
    }
    sign_up(){
        //Click on sign up
        cy.get('.sign_link').click();
        //Click on name
        cy.get('#name').type('Tester')
        //Click on email
        cy.get('#email').type('regressiontest@gmail.com')
        //Click on password
        cy.get('#password').type('Coresqa_139')
        //Check box click
        cy.get('.form-check-input').click();
        cy.get('.authButton').click();
        cy.contains('The email has already been taken').should('be.visible')

    } 
    enterEmail(){
        cy.get('input#email').click()
    cy.get('input#email').type('regressiontest@gmail.com')
    }
    enterPassword(){
        cy.get('#password').click();
        cy.get('#password').type('Coresqa_139');
    }
    Signin(){
        cy.get('.authButton').click()
    }
    Biz_center(){
        //Business Name
        cy.get('#biz_name').click().type('Sanity test Business')
        //Business Org title
        cy.get('#org_title').click().type('E2E automation Org')
        //Get started
        cy.wait(4000)
        cy.get('.authButton').click()

    }




} export default SignUp