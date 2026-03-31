describe('Kordis Stage Login E2E', () => {
  beforeEach(() => {
    cy.fixture('example').as('testdata')
    cy.viewport(1400, 760)

    // Keep tests resilient to non-critical third-party script errors.
    Cypress.on('uncaught:exception', () => false)
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

    cy.url({ timeout: 60000 }).should('not.include', '/login')
    cy.get('input#email').should('not.exist')
    cy.get('#password').should('not.exist')
  })
})
