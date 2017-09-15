'use strict';
// to return open loan offers for each currency

const api = require('/Users/home/poloniex-api.js');

console.log("Poloniex Open Loan Offers")

api.poloniex.returnOpenLoanOffers(function(err, data) {
  if (err) {
    console.log('Error', err);
  }
  console.log(data);
});
