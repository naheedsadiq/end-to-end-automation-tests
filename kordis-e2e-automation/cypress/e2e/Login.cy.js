import Login from '../support/Login-page'

// Suppress uncaught exceptions once (optional; consider removing to catch real errors)
Cypress.on('uncaught:exception', () => false)

describe('Kordis IO web app Login Happy Positive Test Cases Flow', function () {
  const login = new Login()

  beforeEach(function () {
    cy.fixture('example').then(function (testdata) {
      this.testdata = testdata
    })
    cy.viewport(1400, 760)
  })

  it('Verify user login with Valid Credentials into Kordis Web app Stage Site', function () {
    login.OpenURL(this.testdata.url.Live)
    login.enterEmail(this.testdata.username.kordisuser)
    login.enterPassword(this.testdata.password.kordispass)
    login.Signin()
    login.logout()
  })
})