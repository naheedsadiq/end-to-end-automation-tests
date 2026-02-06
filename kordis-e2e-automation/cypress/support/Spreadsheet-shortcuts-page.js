export class ShortKeys{
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
        cy.wait(4000)
     cy.get('#desktop-content > div > div.verticalMenu > button').click() 
        //Click on Sreadsheet
        cy.wait(2000)
        cy.get('#side-menu > :nth-child(3) > .nav-link').click({force:true}); 
    }
    
    viewModel(){
        //Test spreadsheet
        //Click on view model
        cy.get(':nth-child(6) > :nth-child(5) > .sc-eCDnMP > :nth-child(1)').click();
        //Click on home
        cy.wait(3000)
       // cy.get('.jedUfR').click()
    }
    shortkeys(){
        cy.wait(4000)
        cy.get('/html/body/div[1]/div/div[2]/div[3]/div/section/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/table/tbody/tr[4]/td[2]').click({force:true})        //Cell NO 4
        //Click on size of text
        cy.wait(4000)
        cy.get('.kEXCvf > .sc-igYqNe').click({force:true})
        //Click on 18 text size
        cy.wait(4000)
        cy.get('[data-index="7"]').click();
    }
    Formatting(){
        //Click on 8 cell
        cy.wait(4000)
        cy.get('#cell_7_0').click({force:true});
       // Click on Formatting
       cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(9) > div > div:nth-child(3)').click();
       //Row height
       cy.get('.sc-cQIppy > :nth-child(1)').click();
       //Row Field
       cy.get('.gUfxWE > .sc-ikZqro > .sc-jIYZa-D').click().type('120');
       //Click on OK
       cy.get('.sc-lmHPbZ > [type="submit"]').click();
       //Click on column C
    /*   cy.wait(4000)
       cy.get('#hot-fz08vz3b > div.ht_clone_top.handsontable > div > div > div > table > thead > tr > th:nth-child(4) > div').click()
       cy.wait(2000)
       cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(9) > div > div:nth-child(3)').click();*/

    }
    Delete(){
        //click on 7 row
        cy.wait(2000)
        cy.get('#cell_6_1').click({force:true})
        //Click on Delete
        cy.get(':nth-child(9) > .sc-lmHPbZ > :nth-child(2)').click()
        //Delete CELLS
        cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(9) > div > div:nth-child(2) > div > button:nth-child(1)').click();
        //Click on OK
        cy.get('body > div.sc-ewahw.doiIZz > div > div > div > div.sc-lmHPbZ.fIVXof > button:nth-child(2)').click();
        //select CeLLLL
        cy.wait(2000)
        cy.get('#cell_11_1').click({force:true});
         //Click on Delete
         cy.get(':nth-child(9) > .sc-lmHPbZ > :nth-child(2)').click()
         //Delete CELLS
         cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(9) > div > div:nth-child(2) > div > button:nth-child(1)').click();
         //Shift cell UP
         cy.get('#up').click();
          //Click on OK
          cy.wait(2000)
         cy.get('body > div.sc-ewahw.doiIZz > div > div > div > div.sc-lmHPbZ.fIVXof > button:nth-child(2)').click();

    }
    Text_alignment(){
        //Click on 9 cell
        cy.get('#cell_8_0').click({force:true})
        //Click on BOLD
        cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(3) > div > div.sc-lmHPbZ.XxIrU > div:nth-child(1) > button:nth-child(2)').click();
        //Click on first alignment
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(5) > div > div:nth-child(1) > button:nth-child(1)').click();
        //Click on second
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(5) > div > div:nth-child(1) > button:nth-child(2)').click();
        //Click on three
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(5) > div > div:nth-child(1) > button:nth-child(3)').click()
        //Click on 2nd row first locator
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(5) > div > div:nth-child(2) > button:nth-child(1)').click();
        //Click on 2nd row second locator
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(5) > div > div:nth-child(2) > button:nth-child(2)').click();
        //Click on 2nd row third locator
        cy.wait(2000)
        cy.get('#show-spreadsheet > div.fullscreen > div.sc-fejsfX.DOBRq > div.tab > div > div:nth-child(5) > div > div:nth-child(2) > button:nth-child(3)').click();

    }


}
export default ShortKeys