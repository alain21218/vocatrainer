console.log("Je suis pod B");

let msg = "Hello World";
 
let { greet } = require('../pod-a/');

console.log(greet);

greet();