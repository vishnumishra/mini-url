# mini-url

a [Sails v1](https://sailsjs.com) application



### Version info

This app was originally generated on Thu Nov 29 2018 11:52:48 GMT+0530 (IST) using Sails v1.0.2.

# setUp the DataBases

### Currently using the mongoDB
    * Install the mongoDB
    and run the following commands

    
     mongo  # to enter into mongo shell F
     ### Production
          use shortUrl
          db.createUser({ user: "shorturl", pwd: "testing", roles: [{ role: "dbAdmin", db: "shortUrl" }] })

     ## Testing
          use shortUrlTestDb
          db.createUser({ user: "testShortUrl", pwd: "testing", roles: [{ role: "dbAdmin", db: "shortUlrTestDb" }] })

## Run the server:

``` 
git clone  https://github.com/vishnumishra/mini-url.git
cd mini-url
npm i
node app.js
```

## Run the Tests

npm test


## Shortner API
### Request:      
     method:  'POST'
     url:   'http://localhost:1337/miniurl'
     body:  {
               "url":"https://www.devroom.io/2010/12/24/public-readable-amazon-s3-bucket-policy/"
          }

### Response: 

     {
          "hash": "2DQsV5d",
          "new_hash": 0,
          "createdAt": 1543477955373,
          "updatedAt": 1543477955373,
          "id": 1,
          "long_url": "https://www.devroom.io/2010/12/24/public-readable-amazon-s3-bucket-policy/",
          "global_hash": "2gwtOTi",
          "url": "http://bit.ly/2DQsV5d",
          "ip": "::1"
     }

