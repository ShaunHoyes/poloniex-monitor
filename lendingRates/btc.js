const
  api = require('/Users/home/poloniex-api.js'),
  currency = "BTC";

// api.Poloniex.STRICT_SSL = false;

// api.poloniex.returnLoanOrders(currency, function(err, data) {
//   const longRate = data.offers[10].rate * 100;
//   const rate = (longRate).toFixed(4) + "%";
//   module.exports.rate = rate;
// });


/*
api.client.returnLoanOrders(currency)
  .then(response => {
    const { status, data } = response;
    // console.log(data);
    const longRate = data.offers[10].rate * 100;
    const rate = (longRate).toFixed(4) + "%";
    module.exports.rate = rate;
  })
  .catch(err => console.error(err));

module.exports.currency = currency;
*/

api.client.returnLoanOrders(currency)
  .then(response => {
    const { status, data } = response;
    console.log(data);
  })
  .catch(err => console.error(err));
