var colors = require('colors');

let msg = "Salut le monde"

var greet = function () {
    console.log(msg);
};

module.exports.greet = greet;

greet();
