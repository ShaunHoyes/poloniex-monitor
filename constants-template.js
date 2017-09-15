const
  clc = require('cli-color'),
  colors = require('colors'),
  Poloniex = require('./lib/poloniex.js'),
  poloniex = new Poloniex('<api_public_key', 'api_private_key');

Poloniex.STRICT_SSL = false;

module.exports.Poloniex = Poloniex;
module.exports.poloniex = poloniex;
module.exports.colors = colors;
module.exports.clc = clc;
