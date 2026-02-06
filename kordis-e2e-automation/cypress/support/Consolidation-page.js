export class Consolidate{
    openURL(){
        return cy.visit('https://stage.app.kordis.io/');
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
        cy.get('.login-submit-btn').click()
    }

    manage_org(){
         //Click on Buckets navigation
         cy.wait(4000) 
         cy.get('#desktop-content > div > div.verticalMenu > button').click()     
       //Click on Business Center
       cy.wait(4000);
       cy.get(':nth-child(8) > .nav-group-link > .nav-menu-collapse').click({force:true})
       //Manage Organization
       cy.wait(4000)
       cy.get('.mm-active > .mm-collapse > :nth-child(1) > .nav-link').click();
    }
       
   create_org(){
       //Create organization
       cy.wait(4000)
       cy.get('.sc-jfdPgT > .sc-iTOPbJ').click();
       //Click on Consolidate Org
       cy.wait(2000)
       cy.get('.cYxDCe > :nth-child(3)').click();
       //Org title field
       cy.get('.sc-olaEk').type('Cypress E2E Org')
       //Naheed org name
       cy.wait(2000)
       cy.get(':nth-child(3) > [style="width: 100%;"] > .fWTEPa > .sc-igHqoD > .sc-crXcXV').click()
       //Organization Quickbook testing call
       cy.wait(2000)
       cy.get(':nth-child(3) > [style="width: 100%;"] > .fWTEPa > .sc-igHqoD').click()
       //Next Click
       cy.wait(2000)
       cy.get('.kbDMZN').click()
       //Finalize click
       cy.wait(2000)
       cy.get('.bqbqFa > .sc-iTOPbJ').click();
       //Update click
       cy.wait(4000)
       cy.get('.fXhRLh').click();
       //Click on Got it button
       cy.get('.ddvCzM > .sc-iTOPbJ').click();

   }
   Edit(){
    //E2E automation
    cy.wait(4000)
    cy.get(':nth-child(2) > [style="padding-left: 12px;"] > .sc-cQwJvb > :nth-child(1) > .sc-iTOPbJ').click();
    //Organization website
    cy.get(':nth-child(3) > div > .sc-olaEk').clear().type('https://www.kordis.io');
    //Type of business
    cy.get('.css-2agb3y-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click();
    //Real Estate click
    cy.contains('Real Estate').click({force:true});
    //Click on save
    cy.wait(4000)
    cy.get('.sc-ESwgF > .sc-iTOPbJ').click();
   }
   Delete(){
    //Click on delete
    cy.wait(2000)
    cy.get(':nth-child(1) > [style="padding-left: 12px;"] > .sc-cQwJvb > .mr-0 > .sc-iTOPbJ').click();
    //Confirm delete
    cy.wait(2000)
    cy.get('.row > :nth-child(2) > .sc-iTOPbJ').click();
   }
    
   
   
    logout(){
    
        cy.wait(4000)
        cy.get('#logout-form > .sc-iTOPbJ').click({force:true})
    }

}
export default Consolidate