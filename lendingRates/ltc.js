const
  api = require('/Users/home/poloniex-api.js'),
  currency = 'LTC';

api.Poloniex.STRICT_SSL = false;

api.poloniex.returnLoanOrders(currency, function(err, data) {
  console.log(currency + ` Offer Rate: ` + (data.offers[10].rate * 100).toFixed(4) + "%");
});
