const { printState } = require('./src/trafficState')
const { initialState, changeDelay } = require('./src/config')
const { changeTrafficLights } = require('./src/trafficControl')

/**
 * Executes the changeLights with an initialState then starts
 * an interval with a pre-defined delay
 */
const startSimulation = async (state) => {
  const newState = await changeTrafficLights(state)

  if (!newState) return

  setTimeout(() => {
    startSimulation(newState)
  }, changeDelay)
}

// Start simulation
printState(initialState)
startSimulation(initialState)

module.exports = {
  startSimulation
}
