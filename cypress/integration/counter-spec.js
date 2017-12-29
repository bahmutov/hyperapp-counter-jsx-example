import { mount } from 'cypress-hyperapp-unit-test'
import { Counter } from '../../src/components/counter'

/* eslint-env mocha */
describe('Counter component', () => {
  const label = 'PLUS'
  // we are creating spy outside a test, thus have to use
  // Cypress.sinon object
  const onclick = Cypress.sinon.spy()

  beforeEach(() => {
    // passing onclick as a property
    const state = {
      label,
      onclick
    }
    const actions = {}
    mount(state, actions, Counter)
  })

  it('loads', () => {
    cy
      .contains(label)
      .click()
      .click()
      .then(() => {
        expect(onclick).to.have.been.calledTwice
      })
  })
})
