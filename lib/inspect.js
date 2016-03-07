'use strict'
/**
 * @function inspect
 * correct display of event
 * @memberOf Event#
 * @returns {string}
 */
module.exports = function () {
  var queued = Object.keys(this)
    .filter((val) => !this.properties[val] && val)
  var str = 'Event' +
  ' {' +
  '\n  type: ' + this.type +
  '\n  stamp: ' + this.stamp +
  '\n  ' + (this._triggered ? 'triggered' : 'queued') + ': [ ' + queued.join(', ') + ' ]' +
  '\n}'
  return str
}
