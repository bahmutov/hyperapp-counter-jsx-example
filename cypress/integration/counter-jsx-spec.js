// "h" while unused right now will be used when the
// loader changes JSX syntax into "h" calls
// eslint-disable-next-line no-unused-vars
import { h } from 'hyperapp'
import { mount } from 'cypress-hyperapp-unit-test'
import { Counter } from '../../src/components/counter'

// a test showing that we can instantiate JSX view function directly
// inside our test code and interact with it.

/* eslint-env mocha */
describe('Counter test using JSX', () => {
  let onclick
  beforeEach(() => {
    onclick = cy.spy()
    const component = <Counter label={'a test'} onclick={onclick} />
    mount({}, {}, () => component)
  })

  it('loads', () => {
    cy.contains('a test')
  })

  it('calls onclick', () => {
    cy
      .contains('a test')
      .click()
      .then(() => {
        expect(onclick).to.have.been.calledOnce
      })
  })
})
