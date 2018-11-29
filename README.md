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
git clone 
cd miniUrl
npm i
node app.js
```

## Run the Tests

npm test


