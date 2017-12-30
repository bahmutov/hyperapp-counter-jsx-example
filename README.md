# hyperapp-counter-jsx-example

> Small counter example in Hyperapp and JSX (and Cypress tests)

You can mount your Hyperapp components in the tests using JSX syntax by transpiling it
in the [cypress/plugins/index.js](cypress/plugins/index.js) file.

```js
import { mount } from 'cypress-hyperapp-unit-test'
import { Counter } from '../../src/components/counter'
it('calls onclick', () => {
  const label = 'calls onclick'
  const onclick = cy.spy()
  // our component to test
  const component = <Counter label={label} onclick={onclick} />
  mount({}, {}, () => component)
  cy
    .contains(label)
    .click()
    .then(() => {
      expect(onclick).to.have.been.calledOnce
    })
})
```

When running the test in Cypress you have full browser and can interact / inspect every test step by step.

![Spec](images/counter-spec.png)

## Test examples

Application code is in [src](src) folder. All tests are in [cypress/integration](cypress/integration) folder

- [counter-spec.js](cypress/integration/counter-spec.js) shows how to test the [Counter component](src/components/counter.js)
- [counters-spec.js](cypress/integration/counters-spec.js) tests [Counters component](src/components/counters.js)
- [counter-jsx-spec.js](cypress/integration/counter-jsx-spec.js) uses JSX inside the unit test
- [different-counters-spec.js](cypress/integration/different-counters-spec.js) creates various Counter components to test edge cases

## More info

- webpack config taken from https://github.com/selfup/hyperapp-one
- Hyperapp - Cypress bridge uses [cypress-hyperapp-unit-test](https://github.com/bahmutov/cypress-hyperapp-unit-test)
