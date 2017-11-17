'use strict';
// loan maintenance for BTC only
const api = require('/Users/home/poloniex-api.js');
const currency = 'BTC'
//////// 1. cancel all pending loan offers
// return all open offers
api.poloniex.returnOpenLoanOffers(function(err, data) {
  if (err) {
    console.log('Error', err);
  }
  let i;
  for (i = 0; i < data.BTC[i].length; i++) {
    // cancel loan offer
    api.poloniex.cancelLoanOffer(data.BTC.id, function(err, data2) {
      if (err) {
        console.log('Error', err);
      } else {
        console.log(data);
      }
    });
  }
});


////////// 2. If idle balance is greater than 0.01 BTC, issue new loan offer using default parameters
api.poloniex.returnAvailableAccountBalances('all', function(err, data) {
  api.poloniex.returnLoanOrders(currency, function(err, dataRates) {
    const idleFunds = data[Object.keys(data)].BTC;
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
