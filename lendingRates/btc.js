const
  api = require('/Users/home/poloniex-api.js'),
  currency = 'BTC';

api.Poloniex.STRICT_SSL = false;

api.poloniex.returnLoanOrders(currency, function(err, data) {
  console.log(api.clc.xterm(202)(currency + ` Offer Rate`) + `: ` + (data.offers[10].rate * 100).toFixed(4) + "%"); // BTC rate is highlighted in orange
});
