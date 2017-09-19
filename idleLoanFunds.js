// 'use strict';
// returns all idle funds in margin lending account
const api = require('/Users/home/poloniex-api.js');
const Table = require('cli-table');

api.poloniex.returnAvailableAccountBalances('all', function(err, data) {
  if (err) {
    console.log(err);
    return;
  };
  console.log(data);
});
