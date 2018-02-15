// returns all idle funds in margin lending account
const api = require('/Users/shaunhoyes/poloniex-api.js');
const Table = require('cli-table');

api.poloniex.returnAvailableAccountBalances('all', function(err, data) {
  // if (err) {
  //   console.log(err);
  //   // return;
  // };
  if (data.length == 0) {
    console.log("Idle funds: 0 BTC");
    // let availableBTCBalance = "0 BTC";
    // module.exports.availableBTCBalance = availableBTCBalance;
    return;
  } else {
    // console.log(data.lending.BTC);
    console.log("Idle funds: ", api.clc.green(data.lending.BTC));
    // let availableBTCBalance = data.lending.BTC;
    // // console.log(data.length);
    // module.exports.availableBTCBalance = availableBTCBalance;
    return;

  }

});

// module.exports.availableBTCBalance = availableBTCBalance;
