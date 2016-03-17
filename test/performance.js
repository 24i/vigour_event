'use strict'

var test = require('tape')
var Event = require('../')
var events = []
var amountOfEvents = 1000000

test('[perf] Generate amount events', function (t) {
  t.plan(2)
  var startTime = new Date().getTime()
  var i = 0 + amountOfEvents
  while (i--) {
    events.push(new Event('perfTest-' + i))
  }
  var endTime = new Date().getTime()
  t.ok(endTime - startTime < 600, 'Should take less then 500 ms to generate ' + amountOfEvents + ' events')
  t.ok(events[(amountOfEvents - 1)].stamp === amountOfEvents + 1, 'The highest stamp should be ' + amountOfEvents + 1)
})
