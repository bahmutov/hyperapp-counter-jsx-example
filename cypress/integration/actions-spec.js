import { actions } from '../../src/actions'

/* eslint-env mocha */
describe('Actions', () => {
  // testing pure action functions

  const { down, up } = actions

  context('down', () => {
    it('is a function', () => {
      expect(down).to.be.a('function')
    })

    it('decrements counter', () => {
      expect(down()({ count: 10 })).to.deep.equal({
        count: 9
      })
    })
  })

  context('up', () => {
    it('is a function', () => {
      expect(up).to.be.a('function')
    })

    it('increments counter', () => {
      expect(up()({ count: 10 })).to.deep.equal({
        count: 11
      })
    })
  })
})
