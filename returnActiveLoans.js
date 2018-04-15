// returns all active loans for all currencies
// Main dashboard for Lending
const
  api = require('/Users/home/poloniex-api.js'),
  Poloniex = require('./lib/poloniex'),
  Table = require('cli-table2');

require('./activeBTCLoanCount.js');
require('./idleLoanFunds.js');
require('./thirtyDayBTCReturn.js');
require('./open-offers.js');

api.client.returnActiveLoans()
  .then(response => {
    const { status, data } = response;
    console.log("Poloniex Active Loans:");
    let table = new Table({
      head: ['id', 'rate', 'amount', 'duration', 'autoRenew', 'date', 'fees'],
      colWidths: [11, 10, 16, 10, 11, 14, 17]
    });
    for (let i = 0; i < data.provided.length; i++) {
      table.push(
        [data.provided[i].id, (data.provided[i].rate * 100).toFixed(4) + " %", data.provided[i].amount + " " + data.provided[i].currency, data.provided[i].duration + " days", data.provided[i].autoRenew, data.provided[i].date, data.provided[i].fees + " " + data.provided[i].currency]
      )
    }
    console.log(table.toString());
  })
  .catch(err => console.error(err));
