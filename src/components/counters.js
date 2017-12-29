// "h" while unused right now will be used when the
// loader changes JSX syntax into "h" calls
// eslint-disable-next-line no-unused-vars
import { h } from 'hyperapp'
import { Counter } from './counter'

export const Counters = (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <Counter label={'+'} onclick={actions.down} />
    <Counter label={'-'} onclick={actions.up} />
  </main>
)
