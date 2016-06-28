var util = require('util');


function ComppassError(message, actual, expected, type, _in) {
    Error.captureStackTrace(this, this.constructor);
    this.name = 'AssertionError'; //this.constructor.name;
    this.options = {};
    this.options.actual = actual;
    this.options.expected = expected;
    this.options.in = _in;
    this.options.type = type;
    if (type == 'regexp') {
        this.message = 'expected \'' + actual +'\' to match ' + expected + ' regular expression';
    } else if (type == 'value') {
        this.message = 'expected ' + JSON.stringify(actual) + ' to equal ' + JSON.stringify(expected);
    } else {
        this.message = message;
    }
    this.toString = function () {
      return this.message;
    }
}

util.inherits(ComppassError, Error);

module.exports = ComppassError;
