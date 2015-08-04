'use strict'

var test = require('tape')
var valueError = require('./')

test(function (t) {
  var err = new Error('api down!')
  err.statusCode = 500
  var value = valueError(err)
  t.deepEqual(value, {
    message: 'api down!',
    statusCode: 500
  })
  t.ok(Object.getOwnPropertyDescriptor(value, 'message').enumerable, true)
  t.end()
})
