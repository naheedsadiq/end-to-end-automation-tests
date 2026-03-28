import Login from '../support/Login-page'

describe('Profit and Loss dimensions deep link', function () {
  const login = new Login()

  beforeEach(function () {
    cy.fixture('example').then(function (testdata) {
      this.testdata = testdata
    })
    Cypress.on('uncaught:exception', () => false)
    cy.viewport(1400, 760)
  })

  it('opens dimension summary statement with expected filters', function () {
    const deepLink =
      '/qa-stage-org/financial-dimensions/statement?end_date=2026-03-28+00%3A00%3A00&start_date=2022-01-01+00%3A00%3A00&type=actual&view=dimension_summary&interval=retail-4-4-5-periods&show_zero=true&show_actual=true&statement=ProfitAndLoss&retail_calendar_id=13&period_totals=total&dimension_id=26'

    login.OpenURL(this.testdata.url.Live)
    login.enterEmail(this.testdata.username.kordisuser)
    login.enterPassword(this.testdata.password.kordispass)
    login.Signin()
    cy.url({ timeout: 30000 }).should('not.include', '/login')

    cy.visit(deepLink)
    cy.url({ timeout: 30000 }).should('include', '/financial-dimensions/statement')

    cy.url().then((urlString) => {
      const url = new URL(urlString)
      expect(url.pathname).to.eq('/qa-stage-org/financial-dimensions/statement')
      expect(url.searchParams.get('statement')).to.eq('ProfitAndLoss')
      expect(url.searchParams.get('view')).to.eq('dimension_summary')
      expect(url.searchParams.get('interval')).to.eq('retail-4-4-5-periods')
      expect(url.searchParams.get('dimension_id')).to.eq('26')
      expect(url.searchParams.get('period_totals')).to.eq('total')
    })

    cy.get('body', { timeout: 30000 }).then(($body) => {
      const hasAuthenticatedAppShell =
        $body.find('#desktop-content').length > 0 ||
        $body.find('#financial-statement-view').length > 0 ||
        $body.find('[data-qa="menu-financials"]').length > 0

      expect(hasAuthenticatedAppShell, 'authenticated app shell is visible').to.eq(true)
    })

    cy.get('input#email').should('not.exist')
    cy.get('#password').should('not.exist')
    cy.get('body').should('not.contain.text', 'Something went wrong')
  })
})
