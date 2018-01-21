// 'use strict';
// returns all idle funds in margin lending account
const api = require('/Users/home/poloniex-api.js');
const Table = require('cli-table');

api.poloniex.returnAvailableAccountBalances('all', function(err, data) {
  if (err) {
    console.log(err);
    return;
  };
  for (let i = 0; i < Object.keys(data).length; i ++) {
    console.log(Object.keys(data)[i], "account: ", data[Object.keys(data)[i]]);
  }

});
