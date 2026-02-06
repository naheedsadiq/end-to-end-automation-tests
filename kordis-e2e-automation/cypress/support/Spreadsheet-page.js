export class SpreadSheet{
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
    SpreadSheetV2(){
        //Click on navigation
       cy.wait(4000)
     cy.get('#desktop-content > div > div.verticalMenu > button').click() 
        //Click on Sreadsheet
        cy.wait(2000)
        cy.get('#side-menu > :nth-child(3) > .nav-link').click({force:true}); 
    }
    Search(){
        cy.wait(3000)
        cy.get('section#list-spreadsheets div.position-relative > input').type('demo model');
        cy.wait(4000)
        cy.get('section#list-spreadsheets div.position-relative > input').clear();
        cy.reload()
    }
    Createnew(){
       //Create new Spread Sheet
       cy.get('.iBEmOJ > .sc-eCDnMP > .sc-dPyBWt').click();
       //Close the untitle message
       cy.get('.sc-fytxXU > div > span').click()
       //Click on Continue
    //   cy.get('.buUweP > :nth-child(2)').click();
   }
   Spreadsheet_description(){
       //Name
       //click on integration
       cy.get('#tab-3').click();
       //Click on Quick book
       cy.get('.sc-bSakCL > :nth-child(1) > .sc-dPyBWt').click();

    }
    Integrate_date(){
     //Select Template
     cy.get(':nth-child(3) > .sc-ewDbCv > .css-1r1lz01-container > .css-9jidod-control > .css-hlgwow > .css-19bb58m').click()
     //Financial statement
     cy.wait(4000)
     cy.get('#react-select-2-option-1').click()
     
       //income statement tick
       cy.get(':nth-child(1) > .sc-elYLsy').click();
       //Balance sheet
       cy.get(':nth-child(2) > .sc-elYLsy').click()
       //Yearly
       cy.get(':nth-child(4) > .sc-jevyVp').click();
       //Start Date
       cy.get(':nth-child(1) > .sc-ePsNnG > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').click();
       //2024
       cy.get('.react-datepicker__year-wrapper > :nth-child(8)').click();
       //End Date
       cy.wait(4000)
       cy.get(':nth-child(2) > .sc-ePsNnG > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').click();
       //Jan Month
       cy.get('.react-datepicker__year-text--keyboard-selected').click();
       //Integrate
       cy.get('.jLACTJ').click();
      //Click on expand
      cy.wait(4000)
      cy.get('.sc-BePUy').click()
       
        
    }
    viewModel(){
        //Click on view model
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(5) > .sc-eCDnMP > :nth-child(1)').click();
        //Click on home
      //  cy.get('.sc-cBOWCN > :nth-child(2)').click();
    
        //Click on A Cell no 16
        cy.wait(4000)
        cy.get('#show-spreadsheet > div.jss_object.fullscreen > div.sc-jmnUoz.elEHdV > div.jss_container.jtabs.jtabs-animation > div.jtabs-content > div.jss_worksheet.jtabs-selected > div.jss_content.jss_content_overflow > table > tbody > tr:nth-child(1) > td:nth-child(2)').type('Automation Testing for Spread Sheet Automation Testing for Spread Sheet');
      //  cy.get('#hot-i36acm18 > div.ht_master.handsontable > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(20)').scrollTo('center')
        //Click on bold
        cy.wait(4000)
        cy.get('#show-spreadsheet > div.jss_object.fullscreen > div.sc-ifmCnn.cHDxqj.jss_object > div.tab-content > div > div:nth-child(3) > div > div.sc-jvLcbg.hGCoWI > div:nth-child(1) > button:nth-child(1)').click()
        //Click on Italic
        cy.wait(4000)
        cy.get('#show-spreadsheet > div.jss_object.fullscreen > div.sc-ifmCnn.cHDxqj.jss_object > div.tab-content > div > div:nth-child(3) > div > div.sc-jvLcbg.hGCoWI > div:nth-child(1) > button:nth-child(2)').click();
        //Click on cut
      //  cy.wait(4000)
      //  cy.get('#show-spreadsheet > div.fullscreen > div.sc-jFdFZK.cWukop > div.tab > div > div:nth-child(3) > div > div.sc-lmHPbZ.XxIrU > div:nth-child(1) > button:nth-child(3)').click()
        //Click on underline
        cy.wait(4000)
        cy.get('#show-spreadsheet > div.jss_object.fullscreen > div.sc-ifmCnn.cHDxqj.jss_object > div.tab-content > div > div:nth-child(3) > div > div.sc-jvLcbg.hGCoWI > div:nth-child(1) > button:nth-child(3)').click();
        //Click on color
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.jss_object.fullscreen > div.sc-ifmCnn.cHDxqj.jss_object > div.tab-content > div > div:nth-child(3) > div > div.sc-jvLcbg.hGCoWI > div:nth-child(3) > div:nth-child(2)').click()
        //Click on green
        cy.wait(3000)
        cy.get('#color-picker > div:nth-child(3) > div > label:nth-child(2) > div').click()
        //Click on copy
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.jss_object.fullscreen > div.sc-ifmCnn.cHDxqj.jss_object > div.tab-content > div > div:nth-child(1) > div > div:nth-child(1) > button:nth-child(1)').click()
        //Click on paste
        cy.wait(4000)
        cy.get('[data-y="6"][style="height: 30px;"] > [data-x="0"]').click({force:true})
        //click on paste
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.jss_object.fullscreen > div.sc-ifmCnn.cHDxqj.jss_object > div.tab-content > div > div:nth-child(1) > div > div:nth-child(2) > div > button').click();
        cy.scrollTo('top')
      

    }


}

export default SpreadSheet