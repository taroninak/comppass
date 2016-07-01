var comppass = require('../lib/comppass.js');

describe("Object Assertion", function () {

    describe('Nested', function () {

        it('object has no \'name\' property', function (done) {
            try {
                comppass({
                    position: 'Admin',
                    personal: {
                        surname: "Willson",
                        age: 25
                    }
                }, {
                    position: 'Admin',
                    personal: {
                        name: 'William',
                        surname: "Willson",
                        age: 25
                    }
                });
            } catch (ex) {
                var expected = '{"surname":"Willson","age":25} has no "name" property in { personal: ... }';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('20 is not equal to 25', function (done) {
            try {
                comppass({
                    position: 'Admin',
                    personal: {
                        name: 'William',
                        surname: "Willson",
                        age: 20
                    }
                }, {
                    position: 'Admin',
                    personal: {
                        name: 'William',
                        surname: "Willson",
                        age: 25
                    }
                });
            } catch (ex) {
                var expected = 'expected 20 to equal 25 in { personal: { age: ... } }';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('Object is deep equal to self', function (done) {
            try {
                var object = {
                    position: 'Admin',
                    personal: {
                        name: 'William',
                        surname: "Willson",
                        age: 25
                    }
                };
                comppass(object, JSON.parse(JSON.stringify(object)));
            } catch (ex) {
                var err = ex;
            } finally {
                if (err) {
                    return done(new Error('AssertionError should not have been risen'));
                }
                return done();
            }
        });

        it('Nested Array in Object with date', function (done) {
            try {
                var golden = [{
                    id: "57762f0f35f674b904b70ec5",
                    created: "2016-07-01T08:51:27.414Z",
                    topic: "testing topic invite",
                    members: [
                        198326933001102,
                        155505700000102
                    ],
                    messages:[]
                }];
                var array =  [
                    {
                        id: "57762f0f35f674b904b70ec5",
                        created: new Date('2016-07-01T08:51:27.414Z'),
                        topic: "testing topic invite",
                        members: [
                            198326933001102,
                            155505700000102
                        ],
                        messages:[]
                    }
                ];
                comppass(array, golden);
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
