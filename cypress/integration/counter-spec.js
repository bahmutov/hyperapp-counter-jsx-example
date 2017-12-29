import { mount } from 'cypress-hyperapp-unit-test'
import { Counter } from '../../src/components/counter'

/* eslint-env mocha */
describe('Counter component', () => {
  const label = 'PLUS'
  let onclick

  beforeEach(() => {
    // passing onclick as a property
    onclick = cy.spy()
    const state = {
      label,
      onclick
    }
    const actions = {}
    mount(state, actions, Counter)
  })

  it('loads', () => {
    cy.contains(label)
  })

  it('calls on click', () => {
    cy
      .contains(label)
      .click()
      .click()
      .then(() => {
        expect(onclick).to.have.been.calledTwice
      })
  })
})
