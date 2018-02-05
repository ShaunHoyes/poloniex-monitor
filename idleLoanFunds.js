// returns all idle funds in margin lending account
const api = require('/Users/shaunhoyes/poloniex-api.js');
const Table = require('cli-table');

api.poloniex.returnAvailableAccountBalances('all', function(err, data) {
  if (err) {
    console.log(err);
    return;
  };
  const availableBTCBalance = data.lending.BTC;
  module.exports.availableBTCBalance = availableBTCBalance;
});
