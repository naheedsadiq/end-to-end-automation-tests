export class CashFlowexport{
    openURL(){
        return cy.visit('https://stage.app.kordis.io/')
    }
    enterEmail(){
        cy.get('input#email').click()
    cy.get('input#email').type('admin@kordis.io')
    }
    enterPassword(){
        cy.get('#password').click();
        cy.get('#password').type('xcu!mnw1twh.GAC.jkg');
    }
    Signin(){
        cy.get('.authButton').click()
    }
    cashflowclick(){
        //Cashflow back navigation
        cy.wait(4000) 
        cy.get('#desktop-content > div > div.verticalMenu > button').click() 
        //Click on cashflow 
        cy.wait(4000)
        cy.get(':nth-child(3) > .nav-group-link > .nav-menu-collapse').click({force:true});
        //Click on cashflow dashboard
        cy.wait(4000)
        cy.get('.mm-active > .mm-collapse > :nth-child(1) > .nav-link').click({force:true})
    }
    Actuals(){
        //Click on Actuals
        cy.wait(2000)
        cy.get('.gSfgTI > .sc-kjEcVf').click()
        //Enable show forecast
        cy.wait(4000)
        cy.get('.sc-kjEcVf > [style="width: 100%;"] > .d-flex > .sc-jNrolG > .sc-jKztJY').click({force:true});
        //Apply click
        cy.wait(2000)
        cy.get('.hZJlvc').click()
        //Click on export
        cy.wait(2000)
        cy.get('[style="background-color: rgb(255, 255, 255);"] > .sc-gGnWOx > :nth-child(1)').click();
        //Export kordis spreadsheet
        cy.wait(2000)
        cy.get('[style="display: flex; background-color: rgb(250, 251, 255); border: 1px solid rgb(237, 239, 245); border-radius: 8px; padding: 16px; gap: 24px;"] > .sc-fSTKrN > .sc-hKetCu').click();
        //Export cashflow
        cy.get('[style="display: flex; gap: 16px; flex-direction: column;"] > .sc-iTOPbJ').click()
    }
    logout(){
        cy.wait(4000)
        cy.get('#logout-form > .sc-dPyBWt').click({force:true})
    }
}

export default CashFlowexport
