// returns all active loans for all currencies
const api = require('/Users/home/poloniex-api.js');
const Poloniex = require('./lib/poloniex');
const Table = require('cli-table');
require('./lendingRates/btc');
require('./lendingRates/eth');
require('./lendingRates/ltc');
require('./lendingRates/xmr');
require('./lendingRates/bts');

api.poloniex.returnActiveLoans(function(err, data) {
  console.log("Poloniex Active Loans:");
  let table = new Table({
    head: ['id', 'rate', 'amount', 'duration', 'autoRenew', 'date', 'fees'],
    colWidths: [11, 10, 16, 10, 11, 14, 17]
  });
  if (err) {
    console.log("Error", err);
    return;
  }
  for (let i = 0; i < data.provided.length; i++) {
    table.push(
      [data.provided[i].id, (data.provided[i].rate * 100).toFixed(4) + " %", data.provided[i].amount + " " + data.provided[i].currency, data.provided[i].duration + " days", data.provided[i].autoRenew, data.provided[i].date, data.provided[i].fees + " " + data.provided[i].currency]
    )
  }
  console.log(table.toString());
});
