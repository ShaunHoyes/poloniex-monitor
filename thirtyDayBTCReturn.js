// returns your 30-day BTC margin lending return

const
  api = require('/Users/shaunhoyes/poloniex-api.js'),
  colors = require('colors'),
  moment = require('moment'),
  poloniexExchangeApi = require('poloniex-exchange-api');

api.Poloniex.STRICT_SSL = false;

const today = new Date();

let
  start = moment().subtract(30, 'day').unix(),
  end = moment().unix(),

  thirtyDayReturn = 0;

  api.client.returnLendingHistory(start, end)
        .then(response => {
            const { status, data } = response;
            for (let i = 0; i < data.length; i += 1) {
              if (data[i].currency == 'BTC') {
                thirtyDayReturn += Number(data[i].earned);
              }
            }
            console.log("30-day return:", colors.cyan(thirtyDayReturn.toFixed(8), "BTC"));
        })
        .catch(err => console.error(err));
