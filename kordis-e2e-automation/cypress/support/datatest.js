export class datatesting {

changeorg(){
  cy.wait(4000) 
  cy.get('#desktop-content > div > div.verticalMenu > button').click()  
 //    cy.get('body > div.verticalMenu > button').click()  
 cy.wait(4000)  
 cy.get('.sc-itUFFH').click({force:true})
       cy.wait(4000)
       cy.get('div#organization-toggle button:nth-child(14) > p').click()
       cy.wait(4000)
       cy.get('[data-qa="menu-financials"]').click()   
      cy.wait(4000)
       cy.get('ul#side-menu li.nav-group.nav-group-item.mm-active > a > span').click({force:true})
       cy.wait(4000)
       cy.get('[data-qa="menu-financials-statements"]').click({force:true})
}
dataset(){   
  // Pick Design income
  cy.get('#category-4709 > [data-date="2023-01-01|2023-01-31"]').contains('9,943'); 

   //Scroll the page    
cy.get('div#main_budget_content_table div.table-responsive.table-wrapper.financial-grid.financial_TableCellGrid').scrollTo('0%', '15%')

// Pick Gross Profit    
cy.get('tr#category-gross_profit > td:nth-child(2)').contains('77,185')
// Pick net income 
cy.get('#category-net_income > td:nth-child(2)').contains('3,851')

// Again scroll till last step 
cy.get('div#main_budget_content_table div.table-responsive.table-wrapper.financial-grid.financial_TableCellGrid').scrollTo('bottom')

cy.get('#category-net_change_in_cash > td:nth-child(2)').contains('459,903')
}

logout(){
  cy.get('#profile-menu').click()
  cy.wait(4000)
  cy.get('#logout-form > .sc-dPyBWt').click({force:true})
}
}

export default datatesting