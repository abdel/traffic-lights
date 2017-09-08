const moment = require('moment')

/**
 * Basic logger using moment for timestamps
 */
module.exports = (label, parameters) => {
  console.log(moment().format('HH:mm:ss'), label, parameters)
}
