'use strict';
// returns your 30-day BTC margin lending return
const api = require('/Users/home/poloniex-api.js');
const colors = require('colors');
const moment = require('moment');

api.Poloniex.STRICT_SSL = false;

let start = moment().subtract(1, 'month').unix();
let end = moment().unix();
let thirtyDayReturn = 0;

api.poloniex.returnLendingHistory(start, end, function(err, body) {
  if (err) {
    console.log('ERROR', err);
  }
  for (let i = 0; i < body.length; i += 1) {
    if (body[i].currency == 'BTC') {
      thirtyDayReturn += Number(body[i].earned);
    }
  }
  console.log(colors.cyan("30-day return:"));
  console.log(colors.cyan(Number(thirtyDayReturn).toFixed(8), "BTC"));
});