'use strict';
// toggle 'autoRenew' in margin loans
// $ node toggleAutoRenew.js <ID Number>
const api = require('/Users/home/poloniex-api.js');

api.poloniex.toggleAutoRenew(process.argv[2], function(err, data) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log(data);
});
