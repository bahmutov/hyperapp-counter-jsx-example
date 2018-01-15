import { lensProp, over, inc, dec } from 'ramda'

// typical code
// export const actions = {
//   down: () => state => ({ count: state.count - 1 }),
//   up: () => state => ({ count: state.count + 1 })
// }

// using Ramda lenses
// export const actions = {
//   down: () => over(lensProp('count'), dec),
//   up: () => over(lensProp('count'), inc)
// }

// reuse same lens logic
const count = over(lensProp('count'))
export const actions = {
  down: () => count(dec),
  up: () => count(inc)
}
