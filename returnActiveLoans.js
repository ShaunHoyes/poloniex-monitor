// returns all active loans for all currencies
const
  api = require('/Users/home/poloniex-api.js'),
  Poloniex = require('./lib/poloniex'),
  Table = require('cli-table2'),
  btcLending = require('./lendingRates/btc'),
  ethLending = require('./lendingRates/eth'),
  ltcLending = require('./lendingRates/ltc'),
  xmrLending = require('./lendingRates/xmr'),
  btsLending = require('./lendingRates/bts'),
  strLending = require('./lendingRates/str');

api.poloniex.returnActiveLoans(function(err, data) {
  console.log("Poloniex Active Loans:");
  let rateTable = new Table({
    head: ['currency', 'daily loan rate'],
    colWidths: [10, 17]
  });
  let table = new Table({
    head: ['id', 'rate', 'amount', 'duration', 'autoRenew', 'date', 'fees'],
    colWidths: [11, 10, 16, 10, 11, 14, 17]
  });
  if (err) {
    console.log("Error", err);
    return;
  }
  rateTable.push(
    [btcLending.currency, btcLending.rate],
    [ethLending.currency, ethLending.rate],
    [ltcLending.currency, ltcLending.rate],
    [xmrLending.currency, xmrLending.rate],
    [btsLending.currency, btsLending.rate],
    [strLending.currency, strLending.rate]

  )
  for (let i = 0; i < data.provided.length; i++) {
    table.push(
      [data.provided[i].id, (data.provided[i].rate * 100).toFixed(4) + " %", data.provided[i].amount + " " + data.provided[i].currency, data.provided[i].duration + " days", data.provided[i].autoRenew, data.provided[i].date, data.provided[i].fees + " " + data.provided[i].currency]
    )
  }
  console.log(table.toString());
  console.log(rateTable.toString());
});
