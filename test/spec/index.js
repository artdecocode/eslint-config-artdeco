import { equal, assert } from 'zoroaster/assert'
import context, { Context } from '../context' // eslint-disable-line no-unused-vars
import eslintConfigArtdeco from '../../src'

const eslintConfigArtdecoTestSuite = {
  context,
  'should be a function'() {
    equal(typeof eslintConfigArtdeco, 'function')
  },
  'should call package without error'() {
    assert.doesNotThrow(() => {
      eslintConfigArtdeco()
    })
  },
  /**
   * @param {Context} api
   */
  async 'calls test context method'(api) {
    await api.example()
  },
}

export default eslintConfigArtdecoTestSuite
