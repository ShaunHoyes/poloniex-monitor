'use strict';
const api = require('/Users/shaunhoyes/poloniex-api.js');

api.poloniex.toggleAutoRenew(process.argv[2], function(err, data) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log(data);
});
