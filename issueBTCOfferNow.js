// This module will immediately cancel all open BTC loan offers, and use the proceeds to issue a new loan at the current market offer rate. This essentially combines the functionality of `cancelLoanOffer.js` and `createBTCLoanOffer.js`
const api = require('/Users/home/poloniex-api.js');
const currency = 'BTC';

// Step 1: Cancel all open loan offers
api.poloniex.cancelLoanOffer(process.argv[2], function(err, data) {
  if (err) {
    console.log('You have no open loan offers to cancel.', err);
    return;
  }

});

// Step 2: Check to see if idle funds are >= 0.01 BTC
// Step 3: Create new BTC loan offer
