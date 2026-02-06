import Login from '../support/Login-page'
import Financial from '../support/Fin-page'

describe('Kordis web app Add Cashback', function () {
  const login = new Login()
  const fintest = new Financial()

  beforeEach(function () {
    Cypress.on('uncaught:exception', () => false)
    cy.fixture('example').then((testdata) => {
      this.testdata = testdata
    })
    cy.viewport(1400, 760)
  })

  it('Ensure the financials test cases with Default model and toggle scenario', function () {
    login.OpenURL(this.testdata.url.Live)
    login.enterEmail(this.testdata.username.kordisuser)
    login.enterPassword(this.testdata.password.kordispass)
    login.Signin()
    fintest.Add_cashback()
    fintest.logout()
  })
})