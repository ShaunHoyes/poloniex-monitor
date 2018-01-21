// 'use strict';
// returns open loan offers for each currency in json format
// Only for BTC

const api = require('/Users/home/poloniex-api.js');
const Table = require('cli-table2');

console.log("Poloniex Open BTC Loan Offers");

// let totalOutside = 0;

api.poloniex.returnOpenLoanOffers(function(err, data) {
  let table = new Table({
    head: ['id', 'rate', 'amount', 'duration', 'autoRenew'],
    colWidths: [11, 12, 12, 10, 11]
  });
  let totalOpenAmount = 0;

  if (err) {
    console.log('Error', err);
  }

  for (let i = 0; i < data.BTC.length; i++) {
    table.push(
      [data.BTC[i].id, data.BTC[i].rate, data.BTC[i].amount, data.BTC[i].duration, data.BTC[i].autoRenew]
    )
    totalOpenAmount += data.BTC[i].amount;
    // totalOutside += totalOpenAmount;

  }
  console.log(table.toString());
  console.log("Total amount open:", Number(totalOpenAmount), "BTC");

});
