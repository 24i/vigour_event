'use strict'

var test = require('tape')
var Event = require('../')
var eventName = 'testEvent'
var testEvent

test('Construct Event', function (t) {
  t.plan(3)
  testEvent = new Event(eventName)
  t.ok(testEvent instanceof Event, 'Constructed Event should be an instance of Event')
  t.equal(testEvent.type, eventName, 'The event type should be the provided name')
  t.equal(testEvent.stamp, 0, 'Upon instantiation stamp should be 0')
  // t.ok(testEvent.queued instanceof Array && testEvent.queued.length === 0, 'Upon instantiation queued should be an empty Array')
})

test('Construct Event without type', function (t) {
  t.plan(3)
  var namelessEvent = new Event()
  t.ok(namelessEvent instanceof Event, 'Constructed Event should be an instance of Event')
  t.ok(namelessEvent.type === undefined, 'The event type should be undefined')
  t.equal(namelessEvent.stamp, 1, 'Upon instantiation stamp should be 1 (second event instantiated)')
})

test('Construct Event with fixed stamp', function (t) {
  t.plan(1)
  var stamp = 999
  var fixedStampEvent = new Event('stampEvent', stamp)
  t.equal(fixedStampEvent.stamp, stamp)
})
