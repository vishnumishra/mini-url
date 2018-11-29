var util = require('util');

before(function (done) {
  MiniUrl.createEach([{
      "hash": "2DQsV5d",
      "new_hash": 0,
      "createdAt": 1543477955373,
      "updatedAt": 1543477955373,
      "long_url": "https://www.devroom.io/2010/12/24/public-readable-amazon-s3-bucket-policy/",
      "global_hash": "2gwtOTi",
      "url": "http://bit.ly/2DQsV5d",
      "ip": "::1"
    },
    {
      "hash": "2DQsV5d",
      "new_hash": 0,
      "createdAt": 1543477955373,
      "updatedAt": 1543477955373,
      "long_url": "https://www.npmjs.com/package/sails-db-migrate",
      "global_hash": "2gwtOTi",
      "url": "http://bit.ly/2Rlq5co",
      "ip": "::1"
    }
  ]).then(done)
})

describe('MiniUrl (model)', function () {

  describe('#findShortUrl()', function () {
    it('should return 2 urls', function (done) {
      MiniUrl.find()
        .then(function (shortUrl) {

          if (shortUrl.length !== 2) {
            return done(new Error(
              'Should return exactly 2 Short urls -- the urls ' +
              'from our test fixtures who are considered the "best".  ' +
              'But instead, got: ' + util.inspect(shortUrl, {
                depth: null
              }) + ''
            ));
          } //-•

          return done();

        })
        .catch(done);
    });
  });

});
