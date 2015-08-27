var expect = require('expect.js');
var Schema = require('../index');

describe('async-validator', function () {
  describe('string', function () {

    it('works for none require', function (done) {
      new Schema({
        v: {
          type: 'string'
        }
      }).validate({
          v: ''
        }, function (errors) {
          expect(errors).to.be(null);
          done();
        })
    });

    it('works for empty string', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'string'
        }
      }).validate({
          v: ''
        }, function (errors) {
          expect(errors.length).to.be(1);
          expect(errors[0].message).to.be('v is required')
          done();
        })
    });

    it('works for undefined string', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'string'
        }
      }).validate({
          v: undefined
        }, function (errors) {
          expect(errors.length).to.be(1);
          expect(errors[0].message).to.be('v is required')
          done();
        })
    });

    it('works for null string', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'string'
        }
      }).validate({
          v: null
        }, function (errors) {
          expect(errors.length).to.be(2);
          expect(errors[0].message).to.be('v is required')
          expect(errors[1].message).to.be('v is not a string')
          done();
        })
    });

    it('works for message', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'string',
          message: 'haha'
        }
      }).validate({
          v: null
        }, function (errors) {
          expect(errors.length).to.be(1);
          expect(errors[0].message).to.be('haha')
          done();
        })
    });

    it('works for none empty', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'string',
          message: 'haha'
        }
      }).validate({
          v: ' '
        }, function (errors) {
          expect(errors).to.be(null);
          done();
        })
    });

    it('works for whitespace empty', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'string',
          whitespace: true,
          message: 'haha'
        }
      }).validate({
          v: ' '
        }, function (errors) {
          expect(errors.length).to.be(1);
          expect(errors[0].message).to.be('haha')
          done();
        })
    });
  });

  describe('array', function () {
    it('works for type', function (done) {
      new Schema({
        v: {
          type: 'array'
        }
      }).validate({
          v: ''
        }, function (errors) {
          expect(errors.length).to.be(1);
          expect(errors[0].message).to.be('v is not an array');
          done();
        })
    });

    it('works for type and required', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'array'
        }
      }).validate({
          v: ''
        }, function (errors) {
          expect(errors.length).to.be(1);
          expect(errors[0].message).to.be('v is not an array');
          done();
        })
    });


    it('works for none require', function (done) {
      new Schema({
        v: {
          type: 'array'
        }
      }).validate({
          v: []
        }, function (errors) {
          expect(errors).to.be(null);
          done();
        })
    });

    it('works for empty array', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'array'
        }
      }).validate({
          v: []
        }, function (errors) {
          expect(errors.length).to.be(1);
          expect(errors[0].message).to.be('v is required')
          done();
        })
    });

    it('works for undefined array', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'array'
        }
      }).validate({
          v: undefined
        }, function (errors) {
          expect(errors.length).to.be(1);
          expect(errors[0].message).to.be('v is required')
          done();
        })
    });

    it('works for null array', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'array'
        }
      }).validate({
          v: null
        }, function (errors) {
          expect(errors.length).to.be(2);
          expect(errors[0].message).to.be('v is required')
          expect(errors[1].message).to.be('v is not an array');
          done();
        })
    });

    it('works for none empty', function (done) {
      new Schema({
        v: {
          required: true,
          type: 'array',
          message: 'haha'
        }
      }).validate({
          v: [1]
        }, function (errors) {
          expect(errors).to.be(null);
          done();
        })
    });
  });
});
