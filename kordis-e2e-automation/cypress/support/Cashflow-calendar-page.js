export class CashFlowCalendar{
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
        cy.get(':nth-child(3) > .nav-group-link').click({force:true});
        //Click on cashflow dashboard
        cy.wait(4000)
        cy.get('.mm-active > .mm-collapse > :nth-child(1) > .nav-link').click({force:true})
    }
   
    Calendarview(){
        //Showing Actuals click drop down
        cy.wait(2000)
        cy.get('.gSfgTI > .sc-kjEcVf').click();
       //Enable forecaste
       cy.wait(4000)
       cy.get('.sc-kjEcVf > [style="width: 100%;"] > .d-flex > .sc-jNrolG > .sc-jKztJY').click();
      //Click on select forecaste
      cy.wait(2000)
       cy.get('#myDropdown').click({force:true})
       //chris test
       cy.wait(4000)
       cy.get('div#myDropdown div.css-19bb58m').click()
       cy.contains('monthly test').click();
       //Apply click
       cy.wait(2000)
       cy.get('.hZJlvc').click();
     
        
    }
    Add_transaction(){
        //Click on Transaction
        cy.get('.hYTxZh').click()
        //Click on create your own
        cy.get(':nth-child(2) > .sc-kjEcVf > .sc-ftvSNZ').click();
        //Click on name
        cy.get(':nth-child(1) > .modalField > div > .sc-olaEk').click().type('Tester')
        //Select category of transaction
        cy.wait(4000)
        cy.get('.sc-kOsyWZ').click();
        //Click on operating
        cy.get(':nth-child(1) > .sc-gmSIMc').click()
        cy.contains('Advertising').click()
        //Select a forecast
        cy.wait(2000)
        cy.get('.css-1l6y6mc-control').click();
        cy.wait(2000)
        cy.contains('test-1').click({force:true})
        //Click on weekly again to close drop down
        cy.get('.hfrltw').click({force:true})
        //Click on Amount
        cy.get('.giwwic > :nth-child(2) > .sc-iJkJuZ > .sc-kjEcVf > :nth-child(1) > div > .sc-olaEk').type('45')
        //Click on date
        cy.get('.giwwic > :nth-child(2) > .sc-iJkJuZ > .sc-kjEcVf > :nth-child(2) > .sc-fEVwEH > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').click()
        //July 31
        cy.get('.react-datepicker__day--031').click()
        //Click on toggle button
        cy.get('.giwwic > :nth-child(3) > .sc-iJkJuZ > [style="width: 100%;"] > .d-flex > .sc-jNrolG > .sc-jKztJY').click();
        //Add transaction button
        cy.get('.bIOHzN').click()
     
    }
    Add(){
          //Click on 16th
          cy.wait(4000)
          cy.get('.sc-kSmonm > :nth-child(17)').click({force:true});
        //Click on Cash in
        cy.wait(4000)
        cy.get('#cashflow-calendar-view > div > div.sc-eZgkks.hLA-DTm > div.sc-ciicFV.eYEuLj > div.sc-igHqoD.dbrhoP > div.sc-igHqoD.cJFODC > div:nth-child(1) > div > div > div:nth-child(2) > span').click();
        //Click on operating cash
        cy.wait(2000)
        cy.get('#cashflow-calendar-view > div > div.sc-eZgkks.hLA-DTm > div.sc-ciicFV.eYEuLj > div.sc-igHqoD.dbrhoP > div.sc-igHqoD.cJFODC > div:nth-child(1) > div.sc-igHqoD.dSolNF > div > div > div:nth-child(2) > span').click();
        //Uncategorize
        cy.get('#cashflow-calendar-view > div > div.sc-eZgkks.hLA-DTm > div.sc-ciicFV.eYEuLj > div.sc-igHqoD.dbrhoP > div.sc-igHqoD.cJFODC > div:nth-child(1) > div.sc-igHqoD.dSolNF > div:nth-child(2) > div > div:nth-child(1) > span > svg').click();
        //Name field
        cy.get(':nth-child(2) > div > .sc-olaEk').type('Asset')
        //Put value
        cy.get(':nth-child(1) > div > .sc-olaEk').type('50')
        //Tick on name 
        cy.wait(2000)
        cy.get('#cashflow-calendar-view > div > div.sc-eZgkks.hLA-DTm > div.sc-ciicFV.eYEuLj > div.sc-igHqoD.dbrhoP > div.sc-igHqoD.cJFODC > div:nth-child(1) > div.sc-igHqoD.dSolNF > div:nth-child(2) > div.sc-igHqoD.lhxxGS.scrollable-container > div.sc-igHqoD.eoeVQW > form > div > div.sc-igHqoD.gfvtZo > div:nth-child(2)').click();
        //Click on asset
        cy.wait(4000)
        cy.get(':nth-child(1) > .dJwIph > [style="cursor: pointer; margin-top: -3px;"]').click();
        //click on delete
        cy.wait(2000)
        cy.get('.kmrfwv').click();
    }
  
   
    logout(){
      
        cy.wait(4000)
        cy.get('#logout-form > .sc-iTOPbJ').click({force:true})
    }
    cashflowdashboard(){
        //Cashflow back navigation
        cy.wait(4000) 
        cy.get('#desktop-content > div > div.verticalMenu > button').click() 
        //Click on cashflow 
        cy.wait(4000)
        cy.get(':nth-child(3) > .nav-group-link').click({force:true});
        //Click on cashflow dashboard
        cy.wait(4000)
       cy.get('.mm-active > .mm-collapse > :nth-child(1) > .nav-link').click()
    }

}

export default CashFlowCalendar
