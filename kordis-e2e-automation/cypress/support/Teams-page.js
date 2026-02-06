export class Teams{
    openURL(Live){
        cy.visit(Live)
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
    Organization(){
         cy.wait(2000)
         cy.get('#desktop-content > div > div.verticalMenu > button').click({ force: true })
         cy.wait(2000)
         cy.contains('.nav-group-link', /Organization/i).click({ force: true })
         cy.wait(2000)
         cy.get('.nav-group.mm-active .mm-collapse .nav-link').contains(/Teams/i).click({ force: true })
    }
    Teams(){
       // Pagination: go to second page
       cy.get('button, [class*="sc-ezWZfE"]').contains('2').click({ force: true })
       cy.wait(2000)
       // Edit second team row (edit icon)
       cy.get('[style*="padding-left: 12px"]').eq(1).within(() => cy.get('button').first().click({ force: true }))
       cy.wait(2000)
       // Team name
       cy.get('#names').should('be.visible').click().clear().type('QA Stage Team')
       cy.wait(500)
       // Delete permission (5th column / delete icon in row)
       cy.get('.d-flex').eq(4).click({ force: true })
       cy.wait(500)
       cy.contains('button', /Confirm|Delete|Yes/i).click({ force: true })
       cy.wait(2000)
       // Add permission
       cy.contains('button', /Add permission|Permission/i).click({ force: true })
       cy.wait(1000)
       // Permission dropdown
       cy.get('[class*="indicatorContainer"], .css-1vkaozm-indicatorContainer').click({ force: true })
       cy.wait(1000)
       cy.contains('Manage Financials').click({ force: true })
       cy.wait(1000)
       cy.get('[class*="css-1dyz3mf"]').click({ force: true })
       cy.wait(500)
       cy.contains('button', /Add|ADD permission/i).click({ force: true })
       cy.wait(1000)
       // Add members
       cy.contains('button', /Add members|Add member/i).click({ force: true })
       cy.wait(1000)
       cy.get('.modalFieldTwo input, [class*="sc-jevyVp"]').first().type('test')
       cy.wait(1500)
       cy.get('[class*="sc-gUACPG"], .sc-gUACPG').first().click({ force: true })
       cy.wait(500)
       cy.get('.modalButtons').within(() => {
         cy.contains('button', /Add|Confirm/i).click({ force: true })
       })
    }
    Delete(){
        // Back to team list
        cy.wait(2000)
        cy.get('#team-edit button, section button').first().click({ force: true })
        cy.wait(2000)
        // Delete 3rd team row (delete icon)
        cy.get('[style*="padding-left: 12px"]').eq(2).within(() => cy.get('button').last().click({ force: true }))
        cy.wait(1000)
        cy.get('.modalButtons').within(() => cy.contains('button', /Delete|Confirm|Yes/i).click({ force: true }))
    }
    addNested_buckets(){
        //Add nested bucket click
        cy.get('.modalField > .sc-fLljvp').click();
        //Add nested bucket
        cy.get('.sc-PJBeD > div > .sc-kLLYlN').type('Shopping')
        //Add nested bucket click again
        cy.get('.modalField > .sc-ivTnkv > :nth-child(2)').click({force:true})
        //Add another field
        cy.wait(2000)
        cy.get(':nth-child(4) > div > .sc-kLLYlN').click({force:true}).type('Food')
        //Click on Save
        cy.wait(4000)
        cy.get('body > div.sc-ewahw.bgMitr > div > div.sc-bjUoET.kIzwvd > form > div.modalButtons > button:nth-child(2)').click()
    }
    delete(){
       
        //Click on Delete
        cy.wait(4000)
        cy.get('div#manage-bucket div:nth-child(14) > button[type="button"].sc-fLljvp.sc-ivTnkv.sc-gicDKM.cUpbGb.hLOUZG.gVuOBG > span:nth-child(2)').click();
        //Confirm deletion
        cy.get('.pl-2 > .sc-fLljvp').click()
        //Assertion
        cy.wait(4000)
        cy.get('div#manage-bucket div.sc-dIowON.liyhQh > div > div > div > p').should('have.text','Bucket deleted successfully')
    }
    logout(){
      
        cy.wait(4000)
        cy.get('#logout-form > .sc-iTOPbJ').click({force:true})
    }
    search(){
        //Click on current asset bucket
        cy.get('div#bucket-mapping tr:nth-child(2) > td:nth-child(2) > span > div > span > div').click();
        //Searching food in search field
        cy.wait(3000)
        cy.get('div#bucket-mapping div.sc-eIWpBk.dDNpzU > div > input').click({force:true}).type('Food {enter}')
        //Click on food
        cy.wait(4000)
        cy.get('div#bucket-mapping div:nth-child(4) > p').click({force:true});
        //Click on Manage buckets
        cy.wait(4000)
        cy.get('.d-flex > .sc-fLljvp').click();
    }

}
export default Teams