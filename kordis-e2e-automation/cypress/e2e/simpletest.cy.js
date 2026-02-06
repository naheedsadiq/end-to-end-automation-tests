describe('data  Test', function () {
    // test case
    it('Scenario 1 : Data testing for Financial statements', function (){
        cy.viewport(1400, 760);
       //URL launch
       cy.visit('https://stage.app.kordis.io/super-duper-company/financial/view')
     /*  cy.get('input#email').click()
       cy.get('input#email').type('admin@kordis.io')
       cy.get('#password').click();
       cy.get('#password').type('secret');
       cy.wait(4000);
       cy.get('.authButton').click()       
       // identify first column
         // Uncaught error events off
         Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          });
         
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
      cy.get('#main_budget_content_table > div > div > div.table-responsive.table-wrapper.financial-grid.financial_TableCellGrid').each(($elm, index, $list)=> {
          // text captured from column1
          const t = $elm.text();
          // matching criteria
          if (t.includes('Design income')){
             // next sibling captured
             cy.get('#category-4709 > .td_child_category').eq(index).next().then(function(d) {
                //text of following sibling
               const r = d.text()
                //assertion
                expect(r).to.contains('9,943');
                // assertion
   
             })
             
            }
            // text captured from column1
          const n = $elm.text();
          // matching criteria
                  //Scroll the page    
  cy.get('div#main_budget_content_table div.table-responsive.table-wrapper.financial-grid.financial_TableCellGrid').scrollTo('0%', '15%')

          if (n.includes('Net Change in Cash')){
             // next sibling captured
             cy.get('tr#category-net_change_in_cash > td:nth-child(2)').eq(index).next().then(function(d) {
                //text of following sibling
               const m = d.text()
                //assertion
                expect(m).to.contains('314,689');
                
             })
            }
            // text captured from column1
          const k = $elm.text();
          // matching criteria
            if (k.includes('Gross Profit')){
               // next sibling captured
               cy.get('tr#category-gross_profit > td:nth-child(2)').eq(index).next().then(function(d) {
                  //text of following sibling
                 const j = d.text()
                  //assertion
                  expect(j).to.contains('75,992');
                  
               })
              }
               // text captured from column1
          const b = $elm.text();
          // matching criteria
            if (b.includes('Net Income')){
               // next sibling captured
               cy.get('tbody#catg_10 tr#category-net_income > td:nth-child(2)').eq(index).next().then(function(d) {
                  //text of following sibling
                 const c = d.text()
                  //assertion
                  expect(c).to.contains('1,209');
                  
               })
              }*/

    })
})