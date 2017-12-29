import { mount } from 'cypress-hyperapp-unit-test'
import { Counter } from '../../src/components/counter'

/* eslint-env mocha */
describe('Counter component', () => {
  beforeEach(() => {
    mount({}, {}, Counter)
  })

  it('loads', () => {})
})
