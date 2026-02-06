export class ManageOrg{
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
        cy.get('.authButton').click()
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
        //Click on single Org
        cy.get('.cYxDCe > :nth-child(2)').click();
        //Organization name
        cy.wait(2000)
        cy.get(':nth-child(1) > div > .sc-olaEk').click().type('Naheed Org')
        //Organization Email
        cy.wait(2000)
        cy.get(':nth-child(2) > div > .sc-olaEk').clear().type('missanjum139@gmail.com')
        //Org website
        cy.wait(2000)
        cy.get(':nth-child(3) > div > .sc-olaEk').type('https://f3.app.kordis.io')
        //Business type
        cy.get('#myDropdown > .css-2agb3y-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click();
        cy.contains('Retail').click();
        //Upload file
        cy.wait(4000)
      //  cy.get('.sc-GVPqz').click({force:true}).selectFile('cat.png')
        //Click on Add Organization
        cy.get('.sc-ESwgF > .sc-iTOPbJ').click();

    }
    Edit(){
        //Click on Edit
        cy.wait(2000)
        cy.get(':nth-child(1) > [style="padding-left: 12px;"] > .sc-cQwJvb > [style="margin-right: 7px;"] > .sc-iTOPbJ').click();
        //Click on Org Name
        cy.wait(2000)
        cy.get(':nth-child(1) > div > .sc-olaEk').clear().type('Tester Organization')
        //Email
        cy.wait(3000)
        cy.get(':nth-child(2) > div > .sc-olaEk').clear().type('coresqa@gmail.com')
        //Replace
      //  cy.wait(4000)
      //  cy.get('.sc-GVPqz').selectFile('org.jpeg')
        //Click on Save
        cy.wait(2000)
        cy.get('.sc-ESwgF > [type="submit"]').click().click({force:true})
        //Click on Delete
        cy.wait(4000)
        cy.get(':nth-child(2) > [style="padding-left: 12px;"] > .sc-cQwJvb > .mr-0 > .sc-iTOPbJ').click()
        //Confirm delete
        cy.get('.row > :nth-child(2) > .sc-iTOPbJ').click()

    }
   
    logout(){
    
        cy.wait(4000)
        cy.get('#logout-form > .sc-iTOPbJ').click({force:true})
    }

}
export default ManageOrg