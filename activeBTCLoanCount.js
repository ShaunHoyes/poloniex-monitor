'use strict';
// returns active margin lending for BTC
const api = require('/Users/home/poloniex-api.js');

api.poloniex.returnActiveLoans(function(err, data) {
  let btcBalance = 0;
  if (err) {
    console.log('ERROR', err);
  } else {
    for (let i = 0; i < data.provided.length; i += 1) {
      if (data.provided[i]['currency'] = 'BTC') {
        btcBalance += Number(data.provided[i]['amount']);
      }
    }
    console.log(api.clc.green(Number(btcBalance).toFixed(8), "BTC active"));

  }

});
