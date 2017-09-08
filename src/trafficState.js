const logger = require('./logger')

/**
 * A side effect to print the current state of the traffic lights
 *
  * @param {Object} state
 */
const printState = (state) => {
  Object.keys(state).map((key, index) => {
    logger(`${key}:`, state[key])
  })
}

/**
 * Modify the current state and return the new state
 *
 * @param {Object} currentState
 * @param {Object} newState
 */
const updateState = (currentState, newState) => {
  return Object.assign({}, currentState, newState)
}

module.exports = {
  printState,
  updateState
}
