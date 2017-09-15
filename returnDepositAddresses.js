// returns all deposit addresses for all currencies
const api = require('/Users/home/poloniex-api.js');
const Poloniex = require('./lib/poloniex');

api.poloniex.returnDepositAddresses(function(err, data) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log(data);
});
