var comppass = require('../lib/comppass.js');
describe('Value Assertion', function () {

    describe('Number', function () {

        it('10 is not equal 20', function (done) {
            try {
                comppass(10, 20);
            } catch (ex) {
                var expected = 'expected 10 to equal 20';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('\'10\' is not equal 10', function (done) {
            try {
                comppass('10', 10);
            } catch (ex) {
                var expected = 'expected "10" to equal 10';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('10 is not equal \'10\'', function (done) {
            try {
                comppass(10, '10');
            } catch (ex) {
                var expected = 'expected 10 to equal "10"';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('20 is equal 20', function (done) {
            try {
                comppass(20, 20);
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

    describe('String', function () {

        it('\'Sample string\' is not equal \'str\'', function (done) {
            try {
              comppass('Sample string', 'str');
            } catch (ex) {
                var expected = 'expected "Sample string" to equal "str"';
                    if (ex.message == expected) {
                        return done();
                    }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('\'"Sample string"\' is not equal \'Sample string\'', function (done) {
            try {
              comppass('"Sample string"', 'Sample string');
            } catch (ex) {
                var expected = 'expected "\\"Sample string\\"" to equal "Sample string"';
                    if (ex.message == expected) {
                        return done();
                    }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('\'Sample string\' is not equal \'"Sample string"\'', function (done) {
            try {
              comppass('Sample string', '"Sample string"');
            } catch (ex) {
                var expected = 'expected "Sample string" to equal "\\"Sample string\\""';
                    if (ex.message == expected) {
                        return done();
                    }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('\'Sample string\' is equal \'Sample string\'', function (done) {
            try {
                comppass('Sample string', 'Sample string');
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

    describe('Boolean', function () {
        it('false is not equal true', function (done) {
            try {
                comppass(false, true);
            } catch (ex) {
                var expected = 'expected false to equal true';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('undefined is not equal true', function (done) {
            try {
                comppass(undefined, true);
            } catch (ex) {
                var expected = 'expected undefined to equal true';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('undefined is not equal false', function (done) {
            try {
                comppass(undefined, false);
            } catch (ex) {
                var expected = 'expected undefined to equal false';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('true is not equal false', function (done) {
            try {
                comppass(true, false);
            } catch (ex) {
                var expected = 'expected true to equal false';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('true is not equal undefined', function (done) {
            try {
                comppass(true, undefined);
            } catch (ex) {
                var expected = 'expected true to equal undefined';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('1 is not equal true', function (done) {
            try {
                comppass(1, true);
            } catch (ex) {
                var expected = 'expected 1 to equal true';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('null is not equal false', function (done) {
            try {
                comppass(null, false);
            } catch (ex) {
                var expected = 'expected null to equal false';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('true is equal true', function (done) {
            try {
                comppass(true, true);
            } catch (ex) {
                var err = ex;
            } finally {
                if (err) {
                    return done(new Error('AssertionError should not have been risen'));
                }
                return done();
            }
        });

        it('false is equal false', function (done) {
            try {
                comppass(false, false);
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

    describe('Regular Expression', function () {

        it('\'Sample string\' does not match /[d]/ regular expression', function (done) {
            try {
                comppass('Sample string', '/[d]/');
            } catch (ex) {
                var expected = 'expected \'Sample string\' to match /[d]/ regular expression';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('\'Sample string\' does not match /sample/ regular expression', function (done) {
            try {
                comppass('Sample string', '/sample/');
            } catch (ex) {
                var expected = 'expected \'Sample string\' to match /sample/ regular expression';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('\' Sample string\' does not match /^sample/i regular expression', function (done) {
            try {
                comppass(' Sample string', '/^sample/i');
            } catch (ex) {
                var expected = 'expected \' Sample string\' to match /^sample/i regular expression';
                if (ex.message == expected) {
                    return done();
                }
                return done(new Error('expected \'' + ex.message + '\' to equal \'' + expected + '\''));
            }
            return done(new Error('No AssertionError has risen'));
        });

        it('\'Sample string\' do match /^sample/i regular expression', function (done) {
            try {
                comppass('Sample string', '/^sample/i');
            } catch (ex) {
                var err = ex;
            } finally {
                if (err) {
                    return done(new Error('AssertionError should not have been risen'));
                }
                return done();
            }
        });

        it('\'Sample string\' do match /[smpl]+/i regular expression', function (done) {
            try {
                comppass('Sample string', '/[smpl]+/i');
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
