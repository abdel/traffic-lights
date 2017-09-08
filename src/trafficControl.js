const logger = require('./logger')
const { yellowLightDelay } = require('./config')
const { printState, updateState } = require('./trafficState')

/**
 * Given a state, turn on the northSouth traffic light and
 * turn off the eastWest traffic light with short delay between
 * the change of states Yellow => Red
 *
 * @param {Object} state
 */
const changeNorthSouth = (state) => {
  return new Promise((resolve, reject) => {
    // Change eastWest to Yellow
    const eastWestYellow = updateState(state, { eastWest: 'Yellow' })

    // Print updated state
    printState(eastWestYellow)

    /**
     * Short delay between Yellow => Red
     */
    setTimeout(() => {
      // Change eastWest to Red
      const eastWestRed = updateState(eastWestYellow, { eastWest: 'Red' })

      // Change northSouth to Green
      const northSouthGreen = updateState(eastWestRed, {
        northSouth: 'Green'
      })

      resolve(northSouthGreen)
    }, yellowLightDelay)
  })
}

/**
 * Given a state, turn on the eastWest traffic light and
 * turn off the northSouth traffic light with short delay between
 * the change of states Yellow => Red
 *
 * @param {Object} state
 */
const changeEastWest = (state) => {
  return new Promise((resolve, reject) => {
    // Change northSouth to Yellow
    const northSouthYellow = updateState(state, { northSouth: 'Yellow' })

    // Print updated state
    printState(northSouthYellow)

    /**
     * Short delay between Yellow => Red
     */
    setTimeout(() => {
      // Change northSouth to Red
      const northSouthRed = updateState(northSouthYellow, { northSouth: 'Red' })

      // Change eastWest to Green
      const eastWestGreen = updateState(northSouthRed, { eastWest: 'Green' })

      resolve(eastWestGreen)
    }, yellowLightDelay)
  })
}

/**
 * Changes the traffic lights states accordingly. Turn northSouth if
 * turned off, or turn on eastWest if turned off
 *
  * @param {Object} state
 */
const changeTrafficLights = (state) => {
  let modifiedState

  // Turn on northSouth if it's off
  if (state['northSouth'] === 'Red' && state['eastWest'] === 'Green') {
    modifiedState = changeNorthSouth(state)

  // Turn on eastWest if it's off
  } else if (state['northSouth'] === 'Green' && state['eastWest'] === 'Red') {
    modifiedState = changeEastWest(state)
  } else {
    return modifiedState
  }

  // Wait on traffic light update, then print new states
  return modifiedState.then((modifiedState) => {
    printState(modifiedState)
    return modifiedState
  }).catch((e) => logger(e))
}

module.exports = {
  changeNorthSouth,
  changeEastWest,
  changeTrafficLights
}
