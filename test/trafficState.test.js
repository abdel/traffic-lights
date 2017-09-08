const tape = require('tape')
const _test = require('tape-promise').default
const test = _test(tape) // Promisify tape

const { printState, updateState } = require('../src/trafficState')

const initialState = {
  northSouth: 'Green',
  eastWest: 'Red'
}

test('Should update traffic lights state', async (t) => {
  const expected = { northSouth: 'Red', eastWest: 'Green' }
  const actual = await updateState(initialState, expected)

  t.plan(1)
  t.deepEqual(actual, expected, 'Updated state successfully')
  t.end()
})

test('Error printing without traffic lights state', (t) => {
  t.plan(1)
  t.throws(printState, null, 'Failed to print without a state')
  t.end()
})
