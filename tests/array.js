var comppass = require('../lib/comppass.js');

describe("Array Assertion", function () {

    describe('Nested', function () {

        it('array has no such item', function (done) {
            try {
                comppass([
                    "12",
                    10,
                    [
                        '1',
                        false
                    ]
                ],
                [
                    "12",
                    10,
                    [
                        '1',
                        false,
                        true
                    ]
                ]);
            } catch (ex) {
                var expected = '["12",10,["1",false]] has no ["1",false,true] item';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('Array has such item at another index', function (done) {
            try {
                var object = [
                    "12",
                    [
                        false,
                        '1',
                    ],
                    10
                ];
                comppass(object, JSON.parse(JSON.stringify([
                    "12",
                    10,
                    [
                        '1',
                        false
                    ]
                ])));
            } catch (ex) {
                var err = ex;
            } finally {
                if (err) {
                    return done(new Error('AssertionError should not have been risen'));
                }
                return done();
            }
        });

    });
});
