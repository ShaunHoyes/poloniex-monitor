// Only one address can be generated per day, and a new address may not be generated before the previously-generated address has been used.

// to execute via command line
  // node generateNewAddress.js < 3-letter currency code of address >

const api = require('/Users/home/poloniex-api.js');

api.Poloniex.STRICT_SSL = false;



api.poloniex.generateNewAddress(process.argv[2], function(err, data) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log(data);
});
