/**
 * MiniUrlController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {
  BitlyClient
} = require('bitly');
const bitly = new BitlyClient(sails.config.custom.bitlyToken, {});


module.exports = {


  /**
   * `MiniUrlController.find()`
   */
  find: async function (req, res) {
    MiniUrl.find({ ...req.params,
      ...req.query
    }).then(result => {
      res.json(result);
    }).catch(res.error);
  },

  /**
   * `MiniUrlController.create()`
   */
  create: async function (req, res) {

    let shortUrl;
    let ip = req.ip;

    let url = req.body.url || req.params.url || req.query.url;
    if (!url) {
      return res.badRequest({
        error: 'Please send a url for minify!'
      });
    }
    try {
      shortUrl = await bitly.shorten(url);
      let isNewCreated = await MiniUrl.findOrCreate({
        url: shortUrl.url
      }, { ...shortUrl,
        ip
      });
      return res.json({
        ...isNewCreated
      });

    } catch (e) {
      res.serverError(e);
    }

    MiniUrl.create({
      ...shortUrl,
      ip
    }).then(result => {
      return res.json({
        ...result
      });
    }).catch(err => {
      res.error(err);
    });
  },

  /**
   * `MiniUrlController.update()`
   */
  update: async function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  }

};
