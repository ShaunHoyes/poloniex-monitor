'use strict';
// create a BTC loan offer using all available funds
// currently set to execute at the 10th listed offer rate, autoRenew, and for a 10-day duration
const api = require('/Users/home/poloniex-api.js');
const currency = 'BTC';

api.poloniex.returnAvailableAccountBalances('all', function(err, data) {
  const idleFunds = data[Object.keys(data)].BTC;
  api.poloniex.returnLoanOrders(currency, function(err, dataRates) {
    const lendingRate = dataRates.offers[10].rate;
    if (idleFunds >= 0.01) {
      api.poloniex.createLoanOffer('BTC', idleFunds, 15, 1, lendingRate, function(err, dataOffer) {
        console.log(dataOffer);
      });
    } else {
      console.log(idleFunds,  "BTC is not enough to make a loan offer.");
    }
  });
});
