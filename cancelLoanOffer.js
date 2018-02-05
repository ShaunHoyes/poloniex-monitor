'use strict';
// cancel open loan offer using order number
const api = require('/Users/shaunhoyes/poloniex-api.js');

api.poloniex.cancelLoanOffer(process.argv[2], function(err, data) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log(data);
});
