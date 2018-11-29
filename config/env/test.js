/**
 * test environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for test.  The configuration in this file
 * is only used in your test environment, i.e. when you lift your app using:
 *
 * ```
 * NODE_ENV=test node app
 * ```
 *
 * > If you're using git as a version control solution for your Sails app,
 * > this file WILL BE COMMITTED to your repository by default, unless you add
 * > it to your .gitignore file.  If your repository will be publicly viewable,
 * > don't add private/sensitive data (like API secrets / db passwords) to this file!
 *
 * For more best practices and tips, see:
 * https://sailsjs.com/docs/concepts/deployment
 */

module.exports = {


    /**************************************************************************
    *                                                                         *
    * Tell Sails what database(s) it should use in production.                *
    *                                                                         *
    * (https://sailsjs.com/config/datastores)                                 *
    *                                                                         *
    **************************************************************************/
    datastores: {
        default: {
          adapter: 'sails-mongo',
          url: 'mongodb://testShortUrl:testing@localhost/shortUlrTestDb'
      }
    },
  
  
  
    models: {
  
      /***************************************************************************
      *                                                                          *
      * To help avoid accidents, Sails automatically sets the automigration      *
      * strategy to "safe" when your app lifts in production mode.               *
      * (This is just here as a reminder.)                                       *
      *                                                                          *
      * More info:                                                               *
      * https://sailsjs.com/docs/concepts/models-and-orm/model-settings#?migrate *
      *                                                                          *
      ***************************************************************************/
      migrate: 'drop',
      /***************************************************************************
      *                                                                          *
      * If, in production, this app has access to physical-layer CASCADE         *
      * constraints (e.g. PostgreSQL or MySQL), then set those up in the         *
      * database and uncomment this to disable Waterline's `cascadeOnDestroy`    *
      * polyfill.  (Otherwise, if you are using a databse like Mongo, you might  *
      * choose to keep this enabled.)                                            *
      *                                                                          *
      ***************************************************************************/
      // cascadeOnDestroy: false,
  
    },
  
  
  
    /**************************************************************************
    *                                                                         *
    * Always disable "shortcut" blueprint routes.                             *
    *                                                                         *
    * > You'll also want to disable any other blueprint routes if you are not *
    * > actually using them (e.g. "actions" and "rest") -- but you can do     *
    * > that in `config/blueprints.js`, since you'll want to disable them in  *
    * > all environments (not just in production.)                            *
    *                                                                         *
    ***************************************************************************/
    blueprints: {
      shortcuts: false,
    },
  
  
  
    /***************************************************************************
    *                                                                          *
    * Configure your security settings for production.                         *
    *                                                                          *
    * IMPORTANT:                                                               *
    * If web browsers will be communicating with your app, be sure that        *
    * you have CSRF protection enabled.  To do that, set `csrf: true` over     *
    * in the `config/security.js` file (not here), so that CSRF app can be     *
    * tested with CSRF protection turned on in development mode too.           *
    *                                                                          *
    ***************************************************************************/
    security: {
  
      /***************************************************************************
      *                                                                          *
      * If this app has CORS enabled (see `config/security.js`) with the         *
      * `allowCredentials` setting enabled, then you should uncomment the        *
      * `allowOrigins` whitelist below.  This sets which "origins" are allowed   *
      * to send cross-domain (CORS) requests to your Sails app.                  *
      *                                                                          *
      * > Replace "https://example.com" with the URL of your production server.  *
      * > Be sure to use the right protocol!  ("http://" vs. "https://")         *
      *                                                                          *
      ***************************************************************************/
      cors: {
        allowOrigins: [
          'https://localhost','http://127.0.0.1'
        ]
      },
  
    },
  
  
  
  
    /**************************************************************************
    *                                                                         *
    * Set the production log level.                                           *
    *                                                                         *
    * (https://sailsjs.com/config/log)                                        *
    *                                                                         *
    ***************************************************************************/
    log: {
      level: 'info'
    },
  
  
  
    http: {
  
      /***************************************************************************
      *                                                                          *
      * The number of milliseconds to cache static assets in production.         *
      * (the "max-age" to include in the "Cache-Control" response header)        *
      *                                                                          *
      ***************************************************************************/
      cache: 365.25 * 24 * 60 * 60 * 1000, // One year
  
      /***************************************************************************
      *                                                                          *
      * Proxy settings                                                           *
      *                                                                          *
      * If your app will be deployed behind a proxy/load balancer - for example, *
      * on a PaaS like Heroku - then uncomment the `trustProxy` setting below.   *
      * This tells Sails/Express how to interpret X-Forwarded headers.           *
      *                                                                          *
      * This setting is especially important if you are using secure cookies     *
      * (see the `cookies: secure` setting under `session` above) or if your app *
      * relies on knowing the original IP address that a request came from.      *
      *                                                                          *
      * (https://sailsjs.com/config/http)                                        *
      *                                                                          *
      ***************************************************************************/
      // trustProxy: true,
  
    },
  
  
  
    /**************************************************************************
    *                                                                         *
    * Lift the server on port 80.                                             *
    * (if deploying behind a proxy, or to a PaaS like Heroku or Deis, you     *
    * probably don't need to set a port here, because it is oftentimes        *
    * handled for you automatically.  If you are not sure if you need to set  *
    * this, just try deploying without setting it and see if it works.)       *
    *                                                                         *
    ***************************************************************************/
    // port: 80,
  
  
  
    /**************************************************************************
    *                                                                         *
    * Configure an SSL certificate                                            *
    *                                                                         *
    * For the safety of your users' data, you should use SSL in production.   *
    * ...But in many cases, you may not actually want to set it up _here_.    *
    *                                                                         *
    * Normally, this setting is only relevant when running a single-process   *
    * deployment, with no proxy/load balancer in the mix.  But if, on the     *
    * other hand, you are using a PaaS like Heroku, you'll want to set up     *
    * SSL in your load balancer settings (usually somewhere in your hosting   *
    * provider's dashboard-- not here.)                                       *
    *                                                                         *
    * > For more information about configuring SSL in Sails, see:             *
    * > https://sailsjs.com/config/*#?sailsconfigssl                          *
    *                                                                         *
    **************************************************************************/
    // ssl: undefined,
  
  
  
    /**************************************************************************
    *                                                                         *
    * Production overrides for any custom settings specific to your app.      *
    * (for example, production credentials for 3rd party APIs like Stripe)    *
    *                                                                         *
    * > See config/custom.js for more info on how to configure these options. *
    *                                                                         *
    ***************************************************************************/
    custom: {
      bitlyToken: '139b8ce828d784ff7e41651f0357af75fe6efa7c'  
    },
  
  
  
  };
  