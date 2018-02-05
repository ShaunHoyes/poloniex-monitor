const
  api = require('/Users/shaunhoyes/poloniex-api.js'),
  currency = 'BTS';

api.Poloniex.STRICT_SSL = false;

// api.poloniex.returnLoanOrders(currency, function(err, data) {
//   const rate = currency + ` Offer Rate: ` + (data.offers[10].rate * 100).toFixed(4) + "%";
// });

api.poloniex.returnLoanOrders(currency, function(err, data) {
  const longRate = data.offers[10].rate * 100;
  const rate = (longRate).toFixed(4) + "%";
  module.exports.rate = rate;
});

module.exports.currency = currency;
