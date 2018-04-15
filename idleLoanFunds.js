// returns all idle funds in margin lending account
const api = require('/Users/home/poloniex-api.js');
const Table = require('cli-table');

api.client.returnAvailableAccountBalances('all')
  .then(response => {
    const { status, data } = response;
    if (data.length == 0) {
      console.log("Idle funds: 0 BTC");
      return;
    } else {
      console.log("Idle funds: ", api.clc.green(data.lending.BTC));
      return;
    }
  })
  .catch(err => console.error(err));
