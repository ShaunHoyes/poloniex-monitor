'use strict';
// returns active margin lending for BTC
const api = require('/Users/home/poloniex-api.js');

api.client.returnActiveLoans()
  .then(response => {
    const { status, data } = response;
    let btcBalance = 0;
    for (let i = 0; i < data.provided.length; i += 1) {
      if (data.provided[i]['currency'] = 'BTC') {
        btcBalance += Number(data.provided[i]['amount']);
      }
    }
    console.log("Active BTC: ", api.clc.green(Number(btcBalance).toFixed(8), "BTC"));
  })
  .catch(err => console.error(err));
