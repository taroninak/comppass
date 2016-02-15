var cObject = {};
var format = {};

function compare (cObject, format, cb) {
  if(typeof format == 'string') {
    if(/^\/.*\/([img])*?$/.test(format)) {
      var result = /^\/(.*)\/(([img])+)?$/.exec(format);
      var exp = new RegExp(result[1], result[2]);
      expect(exp.test(cObject),
      property + ':' + '\'' +
      res.body[property] + '\'' +
      ' does not match ' +
      value + ' RegExp').to.equal(true);
    }
  }
  else if(typeof format == 'object') {

  }
  else if(Array.isArray(format)) {

  }
  else {
    return errorHandling('Type of provided format could not be identified', cb);
  }
}

function errorHandling(err, cb) {
  if(cb) {
    return cb(err);
  }
  else throw err;
}

module.exports = compare;
