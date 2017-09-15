'use strict';
// cancel open loan offer using order number
// to execute via command line:
    // $ node cancelLoanOffer.js <orderNumber>
const api = require('/Users/home/poloniex-api.js');

api.poloniex.cancelLoanOffer(process.argv[2], function(err, data) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log(data);
});
