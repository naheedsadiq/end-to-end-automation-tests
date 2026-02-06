export class CashFlow{
    openURL(){
        return cy.visit('/')
    }
    enterEmail(email){
        cy.get('input#email').should('be.visible').click().clear().type(email || 'admin@kordis.io')
    }
    enterPassword(password){
        cy.get('#password').should('be.visible').click().clear().type(password || 'xcu!mnw1twh.GAC.jkg')
    }
    Signin(){
        cy.get('.authButton, .login-submit-btn').first().click()
    }
    cashflowclick(){
        //Wait for app to load after login (sidebar visible)
        cy.wait(4000)
        //Click on Cash Flow Tools in sidebar (by text - menu order may vary)
        cy.contains('Cash Flow Tools', { timeout: 20000 }).click({ force: true })
        //Click on Dashboard under Cash Flow
        cy.wait(5000)
        cy.get('.mm-active > .mm-collapse > :nth-child(1) > .nav-link, .nav-group.mm-active .nav-link').first().click({ force: true, timeout: 15000 })
    }
    createforecast(){
        //Click on forecast three dots
        cy.wait(4000)
        cy.get('#financial-cashflow-view > div > div.sc-bTLZcC.cZya-dm > div > div.sc-gpxOzJ.fHDVjv').click();
        //Click on create forecast
        cy.get('.kThgSG > :nth-child(2)').click();
        //Forecast name
        cy.get('.modalField > div > .sc-olaEk').click().type('Automation cashflow')
        //Click on select time range nVIGtion
      /*  cy.get('.css-1i507jx-control').click();
        //select month
        cy.get('#react-select-4-option-1').click();
        //Month value
        cy.get('[style="width: 100%;"] > .sc-eKsAjT').clear().type('5')*/
        //Create a forecast
        cy.get('.uFkft > .sc-dPyBWt').click();
        //assertion
        cy.contains('Given name is already taken.').should('be.visible')
        //Close the window
        cy.wait(4000)
        cy.get('.sc-himrge > .sc-ciZfDS').click({force:true});


    }
    Addtransaction(){

        //Click on Transactions (Cash Flow submenu)
        cy.wait(2000)
        cy.contains('.nav-link', 'Transactions', { timeout: 15000 }).click({ force: true })
        //Click on filter
        cy.wait(4000)
        cy.get('.d-flex > div > .sc-iTOPbJ > .plainButton-hover').click();
        //Click on date range
        cy.wait(4000)
        cy.get('.react-datepicker').click();
        //Calendar: select start date (1st) then end date (10th) - use visible calendar days
        cy.wait(2000)
        cy.get('.react-datepicker-popper').within(() => {
            cy.get('button').first().click({ force: true })
        })
        cy.get('.react-datepicker__day--001').first().click()
        cy.wait(2000)
        cy.get('.react-datepicker-popper').within(() => {
            cy.get('button').last().click({ force: true })
        })
        cy.wait(1000)
        cy.get('.react-datepicker__day--010').first().click()
        //Set date / Apply
        cy.get('.btn-container > [type="button"]').click();
        //United Airlines
        cy.wait(2000)
        cy.get(':nth-child(7) > .sc-hhIBIE').click();
        //Operating check box
        cy.wait(2000)
        cy.get('.sc-hQiiyq > :nth-child(1) > .sc-gUACPG').click()
        //Select All
        cy.get(':nth-child(10) > .sc-hZiNrr > :nth-child(2) > .sc-McBol > [style="width: auto; justify-content: flex-start;"] > .sc-gUACPG').click();
        //click pn all banks
        cy.wait(2000)
        cy.get(':nth-child(13) > .sc-hZiNrr > :nth-child(2) > .sc-McBol > [style="width: auto; justify-content: flex-start;"] > .sc-gUACPG').click()
        //Apply filter
        cy.wait(4000)
        cy.get('.sc-fjOsEE > .sc-iTOPbJ').click()
        //Clear filter
        cy.wait(2000)
        cy.get('[style="width: 160px;"] > .sc-iTOPbJ').click()
        //Add transaction
     /*   cy.wait(4000)
        cy.get('.sc-gpxOzJ dXCYwq').click({force:true});
        //Name
        cy.wait(4000)
        cy.get(':nth-child(1) > .modalField > div > .sc-eKsAjT').click({force:true}).type('test section transaction');
        //Forecast type of transaction naviagtion
        cy.wait(4000)
        cy.get(':nth-child(4) > .css-1uu4mly-container > .css-4a0iwf-control > .css-hlgwow').click({multiple:true});
        //Click on nahid test
        cy.wait(4000)
        cy.contains('#//31 3// week// 10//1').click({force:true});*/

    }
    Tableview(){
        //Showing Actuals click
        cy.get('.gSfgTI > .sc-kjEcVf').click();
        //Enable forecast
        cy.wait(4000)
        cy.get('.sc-kjEcVf > [style="width: 100%;"] > .d-flex > .sc-jNrolG > .sc-jKztJY').click({force:true});
        //Delta
        cy.wait(3000)
        cy.get(':nth-child(5) > .sc-fWjtlR > .sc-gUACPG').click()
        //Apply
        cy.wait(3000)
        cy.get('.hZJlvc').click()
        //Click on expand icon
        cy.wait(2000)
        cy.get('.kZSUCI > .sc-gGnWOx').click();
        //Click on collapse icon
        cy.wait(4000)
        cy.get('.kZSUCI > .sc-gGnWOx > .sc-igHqoD').click()
        //Click on table expand
        cy.get('[style="background-color: rgb(255, 255, 255);"] > .sc-gGnWOx > .sc-igHqoD').click();
         //Click on Csv
         cy.wait(4000)
         cy.get('[style="background-color: rgb(255, 255, 255);"] > .sc-gGnWOx > :nth-child(1) > :nth-child(1)').click({force:true})
         //Export cash flow
        // cy.wait(4000)
        // cy.get('[style="display: flex; gap: 16px; flex-direction: column;"] > .sc-dPyBWt').click();
    }
    Bank_accounts(){
        //Click on three lines
        cy.wait(4000)
        cy.get('.fmwQgC > .sc-jfdPgT').click()
        //Bank of america plaid checking
        cy.get(':nth-child(3) > .sc-gUACPG').click();
        //Bank of america Plaid Saving
        cy.wait(4000)
        cy.get(':nth-child(5) > .sc-gUACPG').click()
        //Click on apply
        cy.wait(2000)
        cy.get('.jhbRTh > :nth-child(2)').click();
        //Click on Week/Month Filter
        cy.wait(4000)
        cy.get('.KNYbg > .sc-igHqoD').click({force:true})
        //Select monthly
        cy.get('.ixHjCY').click();
        //Click on Apply
       // cy.get('.bjdtEv > .jiQNaO > :nth-child(2)').click();
        //Click on date filter
        cy.wait(2000)
        cy.get('[style="display: flex; cursor: pointer; position: relative; align-items: center; width: 85%;"] > .sc-fEVwEH > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').click();
        //Click on back nav
        cy.wait(4000)
        cy.get('.kXQnOW > :nth-child(3) > .sc-crXcXV').click();
       

    }
    Usergenerated_transaction(){
        //Click on cashflow menu
        cy.wait(3000)
        cy.get(':nth-child(3) > .nav-group-link').click();
      
         //Click ion transaction
         cy.wait(4000)
         cy.get('.nav-group.mm-active > .mm-collapse > :nth-child(3) > .nav-link').click({force:true})
         //Click on user generated transaction
         cy.wait(4000)
         cy.get('.sc-cwpsiY > :nth-child(2)').click();
         //Click on filter
         cy.wait(4000)
         cy.get('.d-flex > div > .sc-iTOPbJ').click();
         //Click on date range
         cy.wait(4000)
         cy.get('.react-datepicker').click();
         //click on calendar nav
         cy.wait(2000)
      //   cy.get('#financial-cashflow-transactions-view > div.sc-ekGZwk.gXqIoZ > div.sc-hTtIEF.dGKydQ > div:nth-child(2) > span > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__header.react-datepicker__header--custom > div.sc-iNFqGB.hiBUNk > div:nth-child(1) > button:nth-child(2)').click();
         //Click on 1st dec
         cy.get(':nth-child(1) > .react-datepicker__day--001').click();
         //Click on next nav
        // cy.get('#financial-cashflow-transactions-view > div.sc-fjOsEE.BRhsC > div.sc-kBjqyD.dZUPQZ > div:nth-child(2) > span > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__header.react-datepicker__header--custom > div.sc-fCdCcZ.jqdrai > div:nth-child(3) > button:nth-child(1)').click()
         //Click on 10
         cy.get('.react-datepicker__day--010').click()
         //Set date
         cy.get('.btn-container > [type="button"]').click();
         //Added by Alex click
         cy.get(':nth-child(17) > .sc-hhIBIE').click();
         //Foresast monthly
         cy.get(':nth-child(8) > .sc-hZiNrr > :nth-child(2) > .sc-McBol > :nth-child(3) > .sc-fWjtlR > .sc-gUACPG').click()
         //Operating check box
         cy.get('.sc-hQiiyq > :nth-child(1) > .sc-gUACPG').click()
        //Select all click
        cy.get(':nth-child(10) > .sc-hZiNrr > :nth-child(2) > .sc-McBol > [style="width: auto; justify-content: flex-start;"] > .sc-gUACPG').click();
         //click on all banks
         cy.wait(2000)
        // cy.get(':nth-child(10) > .sc-laFBBL > :nth-child(2) > .sc-jNxNfF > [style="width: auto; justify-content: flex-start;"] > .sc-elYLsy').click()
         //Click on recurring all
         cy.get(':nth-child(13) > .sc-hZiNrr > .hIdYSa > .sc-McBol > :nth-child(3) > .sc-fWjtlR > .sc-gUACPG').click();
         //Apply filter
         cy.wait(4000)
         cy.get('.sc-fjOsEE > .sc-iTOPbJ').click()
         //Clear filter
         cy.wait(2000)
         cy.get('[style="width: 160px;"] > .sc-iTOPbJ').click()
         //Click on row per page
         cy.wait(2000)
         cy.get('.css-1tgpmen-control').click();
         cy.contains('20').click();
       /*  cy.wait(4000)
         cy.get('#react-select-3-option-1').click({force:true});
         cy.scrollTo('bottom') // Scroll the window 500px down*/


    }
    creditcard_transaction(){
        //Click on credit card transaction
        cy.get('.sc-cwpsiY > :nth-child(4)').click()
        //Click on operating system N/A
        cy.get('tbody > :nth-child(2) > :nth-child(7)').click();
        //Click on operating
        cy.get(':nth-child(1) > .sc-gmSIMc').click();
        //Travel
        cy.wait(4000)
        cy.get(':nth-child(27) > .sc-fSTKrN > .sc-hKetCu').click({force:true});
        //Click on create new
      /*  cy.get(':nth-child(2) > .sc-dPyBWt > .plainButton-hover').click()
       //Name new category
       cy.get('[style="width: 100%; height: 41px; display: flex; align-items: center; border-radius: 10px; padding: 0px 5px 0px 0px; border: 2px solid rgb(235, 235, 235);"] > div > .sc-olaEk').type('bun');
       //Click on save
       cy.get('[style="width: 100%; height: 41px; display: flex; align-items: center; border-radius: 10px; padding: 0px 5px 0px 0px; border: 2px solid rgb(235, 235, 235);"] > .sc-dPyBWt').click();
       //Click on fun 
       cy.wait(2000)
   // cy.get(':nth-child(24) > .sc-fbHenz > .sc-bjjCmS').click();*/
       //Search for KFC
       cy.wait(4000)
       cy.get('[alignitems="center"][gap="8px"] > .position-relative > .sc-jevyVp').type('KFc')
       //Click on 3rd page
       cy.wait(3000)
       cy.get(':nth-child(4) > .sc-ezWZfE').click()
        

    }
    logout(){
        cy.wait(4000)
        cy.get('#logout-form > .sc-iTOPbJ').click({force:true})
    }

}

export default CashFlow
