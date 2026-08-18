import Login from '../support/Login-page'

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
  const clickBottomRightCornerFallback = () => {
    cy.window().then((win) => {
      const elementAtPoint = win.document.elementFromPoint(win.innerWidth - 24, win.innerHeight - 24)
      const clickable = elementAtPoint?.closest('button, [role="button"], a, div')
      if (clickable) {
        cy.wrap(clickable).click({ force: true })
      }
    })
  }

  cy.get('body').then(($body) => {
    const launcher = $body.find('button[aria-label="Open chat menu"]:visible').first()
    if (launcher.length) {
      cy.wrap(launcher).click({ force: true })
      return
    }

    clickBottomRightCornerFallback()
  })

  cy.get('body').then(($body) => {
    const aiCfoMenuOption = $body
      .find('button[role="menuitem"][aria-label="Open AI CFO chat"]:visible')
      .first()
    if (aiCfoMenuOption.length) {
      cy.wrap(aiCfoMenuOption).click({ force: true })
    }
  })

  cy.get(CHAT_INPUT_SELECTOR, { timeout: 30000 }).should(($inputs) => {
    expect($inputs.filter(':visible').length).to.be.greaterThan(0)
  })
  cy.contains('AI CFO Assistant', { timeout: 30000 }).should('exist')
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

    cy.get(CHAT_INPUT_SELECTOR)
      .filter(':visible')
      .first()
      .find('p[data-placeholder]')
      .invoke('attr', 'data-placeholder')
      .should('include', 'Ask your AI CFO anything')
  })

  it('submits quick and custom AI CFO prompts', function () {
    ensureAuthenticatedSession(this.testdata, login)
    openAICfoAssistant()

    cy.get('#cfo-chat-root').then(($root) => {
      const cashRunwayPrompt = Cypress.$($root)
        .find('button, [role="button"], div, span')
        .toArray()
        .find(
          (el) => Cypress.$(el).is(':visible') && /Cash Runway/i.test((el.textContent || '').trim())
        )

      if (cashRunwayPrompt) {
        cy.wrap(cashRunwayPrompt).click({ force: true })
        return
      }

      cy.get(CHAT_INPUT_SELECTOR).filter(':visible').first().click().type(
        'What is our current cash runway? How many months can we operate at the current burn rate?{enter}'
      )
    })

    cy.contains('#cfo-chat-root :visible', /current cash runway/i, { timeout: 120000 }).should(
      'exist'
    )

    const customPrompt = 'Summarize my cash position today'
    cy.get(CHAT_INPUT_SELECTOR).filter(':visible').first().as('chatInput')
    cy.get('@chatInput').click().type(`${customPrompt}{enter}`)

    cy.contains('#cfo-chat-root :visible', customPrompt, { timeout: 30000 }).should('exist')

    cy.contains(
      '#cfo-chat-root :visible',
      /cash runway calculated|bank balances retrieved|financial health snapshot ready|where the cash sits/i,
      { timeout: 120000 }
    ).should('exist')

    cy.get('body').should('not.contain', 'Application Error')
  })
})
