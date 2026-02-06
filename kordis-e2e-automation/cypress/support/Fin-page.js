export class Financial{
  spreadsheet(){
    //Click on  Financials models navigation
    cy.wait(4000) 
    cy.get('#desktop-content > div > div.verticalMenu > button').click()   
    cy.wait(4000)
    cy.get(':nth-child(4) > .nav-link').click();
//Click on next nevigation at spreadsheet with load time of 6 secs
//Click on financial statement
cy.wait(3000)
//cy.get('[data-qa="menu-financials-statements"]').click({force:true});


// Navigation on different parameters on spreadsheet 
cy.wait(4000)
cy.get('#category-2 > .finanical_TableCellHeading > .tableFlex > .collapseBtn > .height1-25').click()
//cy.wait(6000)

//cy.get('#category-3 > .finanical_TableCellHeading > .tableFlex > .collapseBtn > .height1-25').click()
//cy.get('ul#side-menu li.nav-group.nav-group-item.mm-active > ul > li:nth-child(1) > a > span').click();
cy.wait(10000)
  }
  defaultfilter(){
    
 // cy.get('select#financial_filter_scenario').select("Default Model")
  
  }
  scroll(){
     window.screenTop(0,70)
  }
  logout(){
    cy.wait(4000)
    cy.get('#logout-form > .sc-iTOPbJ').click({force:true})
}
scrolling(){
  //Scroll the page    
  cy.get('div#main_budget_content_table div.table-responsive.table-wrapper.financial-grid.financial_TableCellGrid').scrollTo('bottom', { duration: 3000 })
}
finacial_V2(){
     //Click on  Financials models navigation
     cy.wait(4000) 
     cy.get('#desktop-content > div > div.verticalMenu > button').click()   
     //Click on financial
     cy.wait(4000)
     cy.get('#side-menu > :nth-child(3) > .nav-link > span').click({force:true});
     //Click on income
     cy.wait(4000)
     cy.get(':nth-child(1) > .sc-itUFFH').click();
  /*   //click on breakdown
     cy.wait(4000)

    cy.get('#save-field > div.sc-isuBgl.CmVDy > div > div').trigger('mouseover').should('be.visible')
    // Select Account 
    cy.wait(4000)
    cy.get('#save-field > div.sc-isuBgl.CmVDy > div > div.sc-igHqoD.ivVqyE > div > div:nth-child(1) > span').click()*/

}
Balance_sheet(){
  //Breakdown
  cy.wait(4000)
  cy.get('.sc-kjEcVf > :nth-child(1) > .sc-igHqoD').click();
  //Click on class
  cy.get('.iORWFN > :nth-child(3)').click();
  //Click on monthly
  cy.get('.sc-elYLsy > .sc-kjEcVf > :nth-child(4) > .sc-igHqoD').click();
  //Click on yearly
  cy.get(':nth-child(4) > .sc-iBkiHk').click();
  //click on date
  cy.wait(4000)
  cy.get('.sc-kjEcVf > .sc-jMKfKv > [style="display: flex; cursor: pointer; position: relative; align-items: center; width: 85%;"] > .sc-jdzUMG > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').click();
  //Click on back nav
  cy.get('#financial-statement-view > div > div.sc-kjEcVf.JzRZP > div > div > div > div.sc-jMKfKv.fDUtxP > div > span > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div:nth-child(2) > div.react-datepicker__month-container > div.react-datepicker__header.react-datepicker__header--custom > div.sc-fCdCcZ.jqdrai > div:nth-child(1) > button:nth-child(2)').click();
  //Click on 1 may
  cy.wait(2000)
  cy.get(':nth-child(1) > .react-datepicker__day--001').click()
  //Click on forward nav
  cy.wait(4000)
  cy.get('#financial-statement-view > div > div.sc-kjEcVf.JzRZP > div > div > div > div.sc-bHfeeg.fRIhln > div > span > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div:nth-child(2) > div.react-datepicker__month-container > div.react-datepicker__header.react-datepicker__header--custom > div.sc-jdzUMG.gVgCdS > div:nth-child(3) > button:nth-child(1)').click();
  //Click on 8
  cy.wait(2000)
  cy.get('.react-datepicker__day--008').click();
  //Apply date
  cy.get('.sc-kjEcVf > .sc-bHfeeg > [style="display: flex; cursor: pointer; position: relative; align-items: center; width: 85%;"] > .sc-fEVwEH > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker').click();
  //Action click
  cy.wait(4000)
  cy.get('.sc-kjEcVf > :nth-child(2) > .sc-igHqoD').click();
  //Select show decimals
  cy.wait(2000)
  cy.get(':nth-child(3) > .sc-iBkiHk').click();
   //Action click
   cy.wait(4000)
   cy.get('.sc-kjEcVf > :nth-child(1) > .sc-igHqoD').click();
  //Reset date
  cy.wait(4000)
  cy.get('.iORWFN > :nth-child(1)').click()


}
Add_cashback(){
   // Open sidebar then Financials (data-qa or side-menu fallback)
   cy.wait(2000)
   cy.get('#desktop-content > div > div.verticalMenu > button').click({ force: true })
   cy.wait(2000)
   cy.get('[data-qa="menu-financials"], #side-menu > :nth-child(3) > .nav-link > span').first().click({ force: true, timeout: 10000 })
   cy.wait(2000)
   cy.get('body').then(($body) => {
     if ($body.find('[data-qa="menu-financials-statements"]').length) {
       cy.get('[data-qa="menu-financials-statements"]').click({ force: true })
     }
   })
   cy.wait(2000)
   // Cash flow statement tab (by text or 4th tab fallback)
   cy.get('#financial-statement-view').within(() => {
     cy.get('ul li button').then(($btns) => {
       const cashflowBtn = $btns.filter((i, el) => /Cash flow|Cash Flow Statement/i.test(el.textContent))
       if (cashflowBtn.length) {
         cy.wrap(cashflowBtn.first()).click({ force: true })
       } else {
         cy.wrap($btns.eq(3)).click({ force: true })
       }
     })
   })
   cy.wait(2000)
   // Add back row: click plus/tooltip in first data row of the statement table
   cy.get('#financial-statement-view table tbody tr').eq(1).within(() => {
     cy.get('[class*="toolTip"], [class*="igHqoD"], .toolTip, button, [role="button"]').first().click({ force: true })
   })
   cy.wait(2000)
   // Select "Billable expense income" (dropdown or list item)
   cy.contains('div', /Billable expense income|Billable/i).click({ force: true })
   cy.wait(1000)
   // Select "Job material"
   cy.contains('div', /Job material|Job Material/i).click({ force: true })
   cy.wait(1000)
   // Confirm / Apply
   cy.contains('button', /Confirm|Apply|Save/i).click({ force: true })
   cy.wait(2000)
   // Accounts dropdown in toolbar
   cy.get('#financial-statement-view').within(() => {
     cy.get('[class*="igHqoD"], [class*="sc-igHqoD"]').first().click({ force: true })
   })
   cy.wait(2000)
   // Click accounts option (e.g. third item or by text)
   cy.contains('span', /Account|Accounts/i).click({ force: true })
 }
}
export default Financial


