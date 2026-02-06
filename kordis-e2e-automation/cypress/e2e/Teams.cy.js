import Teams from '../support/Teams-page'

describe('Kordis web app Teams', function () {
  const teamsPage = new Teams()

  beforeEach(function () {
    Cypress.on('uncaught:exception', () => false)
    cy.fixture('example').then((testdata) => {
      this.testdata = testdata
    })
    cy.viewport(1400, 760)
  })

  it('Ensure Teams flow: Organization, edit team, add permission, add member, delete', function () {
    teamsPage.openURL(this.testdata.url.Live)
    teamsPage.enterEmail(this.testdata.username.kordisuser)
    teamsPage.enterPassword(this.testdata.password.kordispass)
    teamsPage.Signin()
    teamsPage.Organization()
    teamsPage.Teams()
    teamsPage.Delete()
    teamsPage.logout()
  })
})