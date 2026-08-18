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
  const clickBottomRightLauncher = () => {
    cy.window().then((win) => {
      const points = [
        [win.innerWidth - 24, win.innerHeight - 24],
        [win.innerWidth - 40, win.innerHeight - 40],
        [win.innerWidth - 60, win.innerHeight - 60],
      ]

      let launcher
      points.some(([x, y]) => {
        const elementAtPoint = win.document.elementFromPoint(x, y)
        if (!elementAtPoint) {
          return false
        }

        const clickable = elementAtPoint.closest('button, [role="button"], a, div')
        if (!clickable || clickable === win.document.body) {
          return false
        }

        launcher = clickable
        return true
      })

      if (!launcher) {
        throw new Error('AI CFO launcher element not found in bottom-right corner')
      }

      cy.wrap(launcher).click({ force: true })
    })
  }

  const clickVisibleAiCfoMenuOption = () => {
    cy.get('body', { timeout: 20000 }).then(($body) => {
      const option = $body
        .find('button, [role="button"], a, div, span, p')
        .toArray()
        .find(
          (el) =>
            Cypress.$(el).is(':visible') &&
            /Ask about your finances|AI CFO/i.test((el.textContent || '').trim())
        )

      if (option) {
        cy.wrap(option).click({ force: true })
      }
    })
  }

  cy.get('body').then(($body) => {
    const hasVisibleInput = $body
      .find(CHAT_INPUT_SELECTOR)
      .toArray()
      .some((el) => Cypress.$(el).is(':visible'))

    if (hasVisibleInput) {
      return
    }

    clickBottomRightLauncher()
    clickVisibleAiCfoMenuOption()
  })

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
