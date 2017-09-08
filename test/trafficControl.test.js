const tape = require('tape')
const _test = require('tape-promise').default
const test = _test(tape) // Promisify tape

const {
  changeNorthSouth,
  changeEastWest,
  changeTrafficLights
} = require('../src/trafficControl')
const { roundDelay } = require('../src/utils')
const { yellowLightDelay } = require('../src/config')

test('Turn on northSouth, turn off eastWest', async (t) => {
  const start = Date.now()

  const initialState = { northSouth: 'Red', eastWest: 'Green' }

  const expected = { northSouth: 'Green', eastWest: 'Red' }
  const actual = await changeNorthSouth(initialState, { northSouth: 'Green' })

  t.plan(2)
  t.equal(roundDelay(Date.now() - start), yellowLightDelay,
    'Correctly delayed on Yellow before turning Red')
  t.deepEqual(actual, expected, 'northSouth: Green, eastWest: Red')
  t.end()
})

test('Turn off northSouth, turn on eastWest', async (t) => {
  const start = Date.now()

  const initialState = { northSouth: 'Green', eastWest: 'Red' }

  const expected = { northSouth: 'Red', eastWest: 'Green' }
  const actual = await changeEastWest(initialState, { eastWest: 'Green' })

  t.plan(2)
  t.equal(roundDelay(Date.now() - start), yellowLightDelay,
    'Correctly delayed on Yellow before turning Red')
  t.deepEqual(actual, expected, 'northSouth: Red, eastWest: Green')
  t.end()
})

test('Change traffic lights given any state', async (t) => {
  const start = Date.now()

  const initialState = { northSouth: 'Green', eastWest: 'Red' }

  const expected = { northSouth: 'Red', eastWest: 'Green' }
  const actual = await changeTrafficLights(initialState)

  t.plan(2)
  t.equal(roundDelay(Date.now() - start), yellowLightDelay,
    'Correctly delayed on Yellow before turning Red')
  t.deepEqual(actual, expected, 'northSouth: Red, eastWest: Green')
  t.end()
})
