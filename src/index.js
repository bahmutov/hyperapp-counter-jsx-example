import { app } from 'hyperapp'
import { Counters } from './components/counters'
import { actions } from './actions'

const state = {
  count: 0
}

export const main = app(state, actions, Counters, document.body)
