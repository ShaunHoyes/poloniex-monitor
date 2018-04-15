'use strict';
// create a BTC loan offer using all available funds
// currently set to execute at the 10th listed offer rate, autoRenew, and for a 30-day duration
const api = require('/Users/home/poloniex-api.js');
const currency = 'BTC';

// api.poloniex.returnAvailableAccountBalances('all', function(err, data) {
//   const idleFunds = data[Object.keys(data)].BTC;
//   api.poloniex.returnLoanOrders(currency, function(err, dataRates) {
//     const lendingRate = dataRates.offers[12].rate;
//     if (idleFunds >= 0.01) {
//       api.poloniex.createLoanOffer('BTC', idleFunds, 35, 1, lendingRate, function(err, dataOffer) {
//         console.log(dataOffer);
//       });
//     } else {
//       console.log(idleFunds,  "BTC is not enough to make a loan offer.");
//     }
//   });
// });

api.client.returnAvailableAccountBalances('all')
  .then(response => {
    const { status, data } = response;
    const idleFunds = data[Object.keys(data)].BTC;
    api.client.returnLoanOrders(currency)
      .then(respone => {
        const { status, dataRates } = response;
        const lendingRate = dataRates.offers[12].rate;
        if (idleFunds >= 0.01) {
          api.client.createLoanOffer('BTC', idleFunds, 35, 1, lendRate)
            .then(response => {
              const { status, dataOffer } = response;
              console.log(dataOffer);
            })
        } else {
          console.log(idleFunds, "BTC is not enough to make a loan offer.");
        }
        // .catch(err => console.error(err));

      })
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));
