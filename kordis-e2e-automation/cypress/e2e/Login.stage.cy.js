describe('Kordis Stage Login E2E', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err) => {
      // Stage dashboard intermittently throws this known client-side error.
      if (
        err.message.includes('Waves is not defined') ||
        err.message.includes("Cannot read properties of undefined (reading 'top')")
      ) {
        return false
      }
    })
  })

  beforeEach(() => {
    cy.fixture('example').as('testdata')
    cy.viewport(1400, 760)
  })

  it('logs in from stage login page with valid credentials', function () {
    const baseOrLoginUrl = this.testdata.url.Live
    const loginUrl = baseOrLoginUrl.includes('/login')
      ? baseOrLoginUrl
      : `${baseOrLoginUrl.replace(/\/$/, '')}/login`

    cy.visit(loginUrl)

    cy.get('input#email').should('be.visible').clear().type(this.testdata.username.kordisuser)
    cy.get('#password').should('be.visible').clear().type(this.testdata.password.kordispass, {
      log: false,
    })

    cy.get('.authButton, .login-submit-btn')
      .first()
      .should('be.visible')
      .and('not.be.disabled')
      .click()

    cy.location('pathname', { timeout: 60000 }).should((pathname) => {
      expect(pathname).to.not.equal('/login')
      expect(pathname).to.match(/\/analytics(\/\d+)?$/)
    })
    cy.get('body').should('not.contain', 'Application Error')
    cy.get('input#email').should('not.exist')
    cy.get('#password').should('not.exist')
  })
})
