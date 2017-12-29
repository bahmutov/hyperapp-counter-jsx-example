import { app } from 'hyperapp'
import { counters } from './components/counters'

const state = {
  count: 0
}

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
}

export const main = app(state, actions, counters, document.body)
