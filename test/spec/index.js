import { ok } from 'zoroaster/assert'
import eslintConfigArtdeco from '../../src'

const T = {
  'is an object'() {
    ok(eslintConfigArtdeco)
  },
}

export default T
