import { mount } from 'cypress-hyperapp-unit-test'
import { Counters } from '../../src/components/counters'
import { actions } from '../../src/actions'

/* eslint-env mocha */
describe('Counters component', () => {
  const state = {
    count: 0
  }

  beforeEach(() => {
    mount(state, actions, Counters)
  })

  it('increments count', () => {
    cy
      .contains('+')
      .click()
      .click()
    Cypress.main._getState().should('deep.equal', {
      count: 2
    })
  })

  it('increments and decrements', () => {
    cy
      .contains('+')
      .click()
      .click()
    cy
      .contains('-')
      .click()
      .click()
      .click()
    cy.contains('h1', '-1')
  })
})
