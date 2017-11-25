const
  api = require('/Users/home/poloniex-api.js'),
  currency = 'STR';

api.Poloniex.STRICT_SSL = false;

api.poloniex.returnLoanOrders(currency, function(err, data) {
  const longRate = data.offers[10].rate * 100;
  const rate = (longRate).toFixed(4) + "%";
  module.exports.rate = rate;
});

module.exports.currency = currency;
