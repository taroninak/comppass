var Error = require('./error.js');

module.exports = comppass;

function comppass (actual, expected, strict) {
    var err = compare(actual, expected, strict);
    if (err) {
        if(err.options.in) {
            err.message = err.message + ' in ' + err.options.in;
        }
        throw err;
    }
}

function compare (actual, expected, strict) {
    var type = Array.isArray(expected) ? 'array' : typeof expected;
    var err;
    switch(type) {
        case 'string':
            err = compareString(actual, expected);
            break;
        case 'object':
            err = compareObject(actual, expected, strict);
            break;
        case 'array':
            err = compareArray(actual, expected, strict);
            break;
        case 'function':
            break;
        default: err = compareValue(actual, expected);
    }
    return err;
}

function compareString (actual, expected) {
    if (actual instanceof Date) {
        return compareDate(actual, expected);
    } else if(/^\/.*\/([img])*?$/.test(expected)) {
        var result = /^\/(.*)\/(([img])+)?$/.exec(expected);
        var exp = new RegExp(result[1], result[2]);
        if(!exp.test(actual)) {
            return new Error('', actual, expected, 'regexp');
        }
    } else if (actual !== expected) {
        return new Error('', actual, expected, 'value');
    }
    return null;
}

function compareNumber (actual, expected, strict) {
    if (actual !== expected) {
        return new Error('', actual, expected, 'value');
    }
}

function compareDate (actual, expected) {
    if (typeof expected == 'string') {
        var converted = new Date(expected);
    }
    return compare(actual.getTime(), converted.getTime());
}

function compareValue (actual, expected, strict) {
    if (actual !== expected) {
        return new Error('', actual, expected, 'value');
    }
}

function compareObject (actual, expected, strict) {
    for(var key in expected) {
        if(typeof expected[key] == 'function') {
            continue;
        }
        if (!actual.hasOwnProperty(key)) {
            return new Error(JSON.stringify(actual) + ' has no "' + key + '" property', actual, expected);
        }
        var err = compare(actual[key], expected[key], strict);

        if (err) {
            err.options.in = '{ ' + key + ': ' + (err.options.in || '...') + ' }';
            return err;
        }
    }
    return null;
}

function compareArray (actual, expected, strict) {
    for(var idx in expected) {
        var found = false;
        for(var i in actual) {
            var err = compare(actual[i], expected[idx], strict);
            if (!err) {
                found = true;
                break;
            };
        }
        if(!found) {
            return new Error(JSON.stringify(actual) + ' has no ' + JSON.stringify(expected[idx]) + ' item', actual, expected);
        }
    }
    return null;
}
