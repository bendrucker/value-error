'use strict'

var extend = require('xtend')

module.exports = function valueError (err) {
  var copy = extend(err)
  copy.message = err.message
  return copy
}
