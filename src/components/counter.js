// "h" while unused right now will be used when the
// loader changes JSX syntax into "h" calls
// eslint-disable-next-line no-unused-vars
import { h } from 'hyperapp'

export const Counter = ({ label, onclick }) => (
  <button onclick={onclick}>{label}</button>
)
