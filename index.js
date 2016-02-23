var chai = require('chai');
chai.config.includeStack = true;
var should = chai.should();
var expect = chai.expect;
var _showDiff = false;
var assert = chai.assert;
var util = require('util');

function compare (value, format, cb) {
  if(typeof format == 'string' && typeof value == 'string') {
    if(/^\/.*\/([img])*?$/.test(format)) {
      var result = /^\/(.*)\/(([img])+)?$/.exec(format);
      var exp = new RegExp(result[1], result[2]);
      if(!exp.test(value)) {
        throw new AssertionError('does not match', '"' + value + '"',
        format, 'regexp', '"' + value + '"');
      }
    }
    else {
      try {
        expect(value).to.equal(format);
      } catch(err) {
        if(err) {
          throw new AssertionError(err.message, '"' + err.actual + '"', '"' + err.expected + '"', 'value', '"' + value + '"');
        }
      }
    }
  }
  else if(Array.isArray(format) && Array.isArray(value)) {
    for(var index in format){
      try {
        compare(value[index], format[index]);
      }
      catch(err) {
        if(err) {
          throw new AssertionError(err.message, err.actual, err.expected, err.type, '[ ' + index + ' : ' + err.str + '] ');
        }
      }
    }
  }
  else if(typeof format == 'object' && typeof value == 'object') {
    for(var key in format) {
      try {
        expect(value).to.have.property(key);
        compare(value[key], format[key]);
      }
      catch(err) {
        if(err) {
          throw new AssertionError(err.message, err.actual, err.expected, err.type, '{ ' + key + ' : ' + err.str + '} ');
        }
      }
    }
  }
  else {
    try {
      expect(value).to.equal(format);
    } catch(err) {
      if(err) {
        throw new AssertionError(err.message, err.actual, err.expected, 'value', value);
      }
    }
  }
}

AssertionError.prototype.name = 'AssertionError';
function AssertionError(message, actual, expected, type, str) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.mssg = message;
  this.actual = actual;
  this.expected = expected;
  this.type = type;
  this.str = str;
  this.showDiff = _showDiff;
  this.toString = function () {
    if(this.type == 'regexp') {
      return this.str + ' ' + 'does not mutch ' + this.expected + ' regular expression';
    } else if(this.type == 'value') {
      return 'expected ' + this.actual + ' ' + 'to equal ' + this.expected;
    }
  }
  this.message = this.toString();
}

util.inherits(AssertionError, Error);

module.exports = compare;
