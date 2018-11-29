var supertest = require('supertest');
const assert = require('assert');


describe('MiniUrl.create', function() {

  describe('#create()', function() {
    it('should return a mini url', function (done) {
      supertest(sails.hooks.http.app)
      .post('/MiniUrl')
      .send({ url: 'https://www.devroom.io/2010/12/24/public-readable-amazon-s3-bucket-policy/' })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert(res.body.url, 'http://bit.ly/2DQsV5d')
        done();
      });
    });
  });
  describe('#find()', function() {
    it('should return a previous data', function (done) {
      supertest(sails.hooks.http.app)
      .get('/MiniUrl')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert(res.body.length);
        assert(res.body[0].url, 'http://bit.ly/2DQsV5d')
        done();
      });
    });
  });
  describe('#create()', function() {
    it('should return an error', function (done) {
      supertest(sails.hooks.http.app)
      .post('/MiniUrl')
      .send({ })
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);
        assert(res.body.error , 'Please send a url for minify!')
        done();
      });
    });
  });
});