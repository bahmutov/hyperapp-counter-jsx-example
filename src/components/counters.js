// "h" while unused right now will be used when the
// loader changes JSX syntax into "h" calls
// eslint-disable-next-line no-unused-vars
import { h } from 'hyperapp'

export const counters = (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <button onclick={actions.down}>-</button>
    <button onclick={actions.up}>+</button>
  </main>
)
