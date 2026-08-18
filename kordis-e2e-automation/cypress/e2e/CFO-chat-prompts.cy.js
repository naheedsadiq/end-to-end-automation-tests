import Login from '../support/Login-page'

const QUICK_PROMPTS = ['Cash Runway', 'P&L Summary', 'Bank Balances', 'AR Aging']
const CHAT_INPUT_SELECTOR = '[contenteditable="true"][aria-label="Message input"]'

const ignoreKnownStageExceptions = () => {
  Cypress.on('uncaught:exception', (err) => {
    const knownStageErrors = [
      'Waves is not defined',
      "Cannot read properties of undefined (reading 'top')",
    ]

    if (knownStageErrors.some((message) => err.message.includes(message))) {
      return false
    }
  })
}

const getStageLoginUrl = (urlFromFixture) => {
  return urlFromFixture.includes('/login')
    ? urlFromFixture
    : `${urlFromFixture.replace(/\/$/, '')}/login`
}

const openAICfoAssistant = () => {
  cy.get('body').then(($body) => {
    const hasVisibleInput = $body.find(`${CHAT_INPUT_SELECTOR}:visible`).length > 0

    if (hasVisibleInput) {
      return
    }

    const hasVisibleMenuOption =
      $body.find('button[role="menuitem"][aria-label="Open AI CFO chat"]:visible').length > 0

    if (!hasVisibleMenuOption) {
      cy.get('#cfo-chat-root button[aria-label="Open chat menu"]', { timeout: 30000 }).click({
        force: true,
      })
    }

    cy.get('button[role="menuitem"][aria-label="Open AI CFO chat"]', { timeout: 30000 }).click({
      force: true,
    })
  })

  cy.get(CHAT_INPUT_SELECTOR, { timeout: 30000 }).should('be.visible')
  cy.contains('AI CFO Assistant', { timeout: 30000 }).should('be.visible')
}

const ensureAuthenticatedSession = (testdata, login) => {
  cy.visit(getStageLoginUrl(testdata.url.Live))

  cy.get('body').then(($body) => {
    if ($body.find('input#email').length) {
      login.enterEmail(testdata.username.kordisuser)
      login.enterPassword(testdata.password.kordispass)
      login.Signin()
    }
  })

  cy.location('pathname', { timeout: 60000 }).should('match', /\/analytics(\/\d+)?$/)
  cy.wait(4000)
}

describe('Kordis AI CFO chat prompt tests', () => {
  const login = new Login()

  before(() => {
    ignoreKnownStageExceptions()
  })

  beforeEach(function () {
    cy.fixture('example').as('testdata')
    cy.viewport(1400, 760)
  })

  it('shows default AI CFO quick prompt chips', function () {
    ensureAuthenticatedSession(this.testdata, login)
    openAICfoAssistant()

    QUICK_PROMPTS.forEach((prompt) => {
      cy.contains('button, span, div', new RegExp(`^${Cypress._.escapeRegExp(prompt)}$`)).should(
        'be.visible'
      )
    })

    cy.get(`${CHAT_INPUT_SELECTOR} p[data-placeholder]`)
      .invoke('attr', 'data-placeholder')
      .should('include', 'Ask your AI CFO anything')
  })

  it('submits quick and custom AI CFO prompts', function () {
    ensureAuthenticatedSession(this.testdata, login)
    openAICfoAssistant()

    cy.contains('button, span, div', /^Cash Runway$/).click({ force: true })
    cy.contains(/current cash runway/i, { timeout: 120000 }).should('be.visible')

    const customPrompt = 'Summarize my cash position today'
    cy.get(CHAT_INPUT_SELECTOR).first().as('chatInput')
    cy.get('@chatInput').click().type(`${customPrompt}{enter}`)

    cy.contains(customPrompt, { timeout: 30000 }).should('be.visible')

    cy.contains(
      /cash runway calculated|bank balances retrieved|financial health snapshot ready|where the cash sits/i,
      { timeout: 120000 }
    ).should('be.visible')

    cy.get('body').should('not.contain', 'Application Error')
  })
})
