// "h" while unused right now will be used when the
// loader changes JSX syntax into "h" calls
// eslint-disable-next-line no-unused-vars
import { h } from 'hyperapp'
import { mount } from 'cypress-hyperapp-unit-test'
import { Counter } from '../../src/components/counter'

// instantiate Counter inside each test, not in beforeEach

/* eslint-env mocha */
describe('Counter variations', () => {
  it('calls onclick', () => {
    const label = 'calls onclick'
    const onclick = cy.spy()
    const component = <Counter label={label} onclick={onclick} />
    mount({}, {}, () => component)

    cy
      .contains(label)
      .click()
      .then(() => {
        expect(onclick).to.have.been.calledOnce
      })
  })

  it('can be inside another div', () => {
    const label = 'calls onclick'
    const onclick = cy.spy()
    const component = (
      <div>
        <Counter label={label} onclick={onclick} />
      </div>
    )
    mount({}, {}, () => component)

    cy
      .contains(label)
      .click()
      .then(() => {
        expect(onclick).to.have.been.calledOnce
      })
  })

  it('works without label', () => {
    const onclick = cy.spy()
    const component = (
      <div>
        <Counter onclick={onclick} />
      </div>
    )
    mount({}, {}, () => component)
    cy
      .get('button')
      .click()
      .then(() => {
        expect(onclick).to.have.been.calledOnce
      })
  })

  it('works even without onclick', () => {
    const label = 'no click'
    const component = (
      <div>
        <Counter label={label} />
      </div>
    )
    mount({}, {}, () => component)
    cy.contains(label)
  })
})
