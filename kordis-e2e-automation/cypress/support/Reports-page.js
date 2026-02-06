export class Reports{
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
    reportsclick(){
        //Cashflow back navigation
        cy.wait(4000) 
        cy.get('#desktop-content > div > div.verticalMenu > button').click() 
        //Click on Dashboard
        cy.wait(3000)
     //   cy.get('.nav-group.active > .nav-group-link > .nav-menu-collapse').click({force:true});
        //Click on reports
        cy.wait(4000)
        cy.get(':nth-child(2) > .nav-group-link > span').click({force:true})
        //Click on reports library
        cy.wait(3000)
        cy.get('.mm-active > .mm-collapse > :nth-child(1) > .nav-link').click()
        //Create reports
        cy.get('.justify-content-between > .sc-iTOPbJ').click();
        //Report name
        cy.get('.sc-olaEk').clear().type('Report feature test');
        //Click on kordis org access yes
        cy.get(':nth-child(1) > .sc-eTglXX').click();
        //Click on create button
        cy.wait(4000)
        cy.get('.pl-2 > .sc-iTOPbJ').click()
        //Click on pin
      /*  cy.get(':nth-child(2) > :nth-child(5) > div > :nth-child(2)').click()
        //pin report
        cy.wait(4000)
        cy.get('body > div.sc-kLLYlN.kLcqeR > div > div > div > div.row.no-gutters > div.col-6.pl-2 > button').click()*/
      
    }
    delete(){
        //clickn on my reports
        cy.wait(4000)
        cy.get('.iJGkQW').click()
        //Click on duplicate
        cy.wait(4000)
        cy.get('#reports-list > div.sc-gspJbr.hrPzxE > div > table > tbody > tr:nth-child(2) > td:nth-child(5) > div > button:nth-child(4) > span.mr-2 > svg').click();
        //Click on YES radio button
        cy.get(':nth-child(1) > .sc-eTglXX').click({force:true})
        //Click on duplicate
        cy.get('body > div.sc-kLLYlN.kLcqeR.jss_object > div > div.sc-jdANtv.duFrmY > div > div.row.no-gutters > div.col-6.pl-2 > button').click();
        //Click on delete
        cy.get(':nth-child(1) > :nth-child(5) > div > :nth-child(1)').click()
        //Delete confirmation
        cy.get('.pl-2 > .sc-iTOPbJ').click();

    }
    
    logout(){
        cy.wait(4000)
        cy.get('#logout-form > .sc-iTOPbJ').click({force:true})
    }

}

export default Reports
