const api = require('/Users/shaunhoyes/poloniex-api.js');
const Table = require('cli-table2');
const clc = require('cli-color');
const cyanBright = clc.cyanBright;

console.log(cyanBright("Poloniex Margin Account Summary"));
api.poloniex.returnMarginAccountSummary(function(err, data) {
  if (err) {
    console.log("Error", err);
    return;
  };
  let table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
       , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
       , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
       , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });

  for (let i = 0; i < Object.keys(data).length; i++) {
    table.push(
      [Object.keys(data)[i], data[Object.keys(data)[i]]],
    )
  };
  console.log(table.toString());
});
