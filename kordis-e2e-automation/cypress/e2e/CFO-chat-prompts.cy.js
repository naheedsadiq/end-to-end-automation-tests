import Login from '../support/Login-page'

const QUICK_PROMPTS = ['Cash Runway', 'P&L Summary', 'Bank Balances', 'AR Aging']
const CHAT_INPUT_SELECTOR =
  'textarea[placeholder*="Ask your AI CFO anything"], input[placeholder*="Ask your AI CFO anything"]'

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
    const hasVisibleInput = $body
      .find(CHAT_INPUT_SELECTOR)
      .toArray()
      .some((el) => Cypress.$(el).is(':visible'))

    if (hasVisibleInput) {
      return
    }

    cy.window().then((win) => {
      const launcher = [...win.document.querySelectorAll('button, [role="button"]')]
        .filter((el) => {
          const rect = el.getBoundingClientRect()
          const styles = win.getComputedStyle(el)
          const isVisible =
            rect.width > 0 &&
            rect.height > 0 &&
            styles.display !== 'none' &&
            styles.visibility !== 'hidden'
          const isNearBottomRight =
            rect.right > win.innerWidth - 200 && rect.bottom > win.innerHeight - 200
          return isVisible && isNearBottomRight
        })
        .sort((a, b) => {
          const aRect = a.getBoundingClientRect()
          const bRect = b.getBoundingClientRect()
          return bRect.bottom + bRect.right - (aRect.bottom + aRect.right)
        })[0]

      if (!launcher) {
        throw new Error('AI CFO launcher button not found on analytics page')
      }

      cy.wrap(launcher).click({ force: true })
    })
  })

  cy.contains('button, [role="button"], div, span, p', /Ask about your finances|AI CFO/i, {
    timeout: 20000,
  })
    .should('be.visible')
    .click({ force: true })

  cy.get(CHAT_INPUT_SELECTOR, { timeout: 30000 }).should(($inputs) => {
    const hasVisibleInput = $inputs.toArray().some((el) => Cypress.$(el).is(':visible'))
    expect(hasVisibleInput).to.equal(true)
  })
  cy.contains('AI CFO Assistant').should('exist')
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

    cy.get(CHAT_INPUT_SELECTOR).should(
      'have.attr',
      'placeholder',
      'Ask your AI CFO anything... (type / for skills)'
    )
  })

  it('submits quick and custom AI CFO prompts', function () {
    ensureAuthenticatedSession(this.testdata, login)
    openAICfoAssistant()

    cy.contains('button, span, div', /^Cash Runway$/).click({ force: true })
    cy.contains(/current cash runway/i, { timeout: 120000 }).should('be.visible')

    const customPrompt = 'Summarize my cash position today'
    cy.get(CHAT_INPUT_SELECTOR).first().as('chatInput')
    cy.get('@chatInput').clear().type(`${customPrompt}{enter}`)

    cy.contains(customPrompt, { timeout: 30000 }).should('be.visible')
    cy.get('@chatInput').should('have.value', '')

    cy.contains(
      /cash runway calculated|bank balances retrieved|financial health snapshot ready|where the cash sits/i,
      { timeout: 120000 }
    ).should('be.visible')

    cy.get('body').should('not.contain', 'Application Error')
  })
})
