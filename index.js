// const {getCurrentDate} = require('./dateUtils')

// //console.log(`getCurrentDate:  ${getCurrentDate()}`);
// //console.log(123456);

// //console.log(process.env)
// //console.log(process.argv)
// console.log (__dirname);
// console.log(__filename)

const Calc = require('calc-js').Calc;

console.log(process.argv)
const [,,a,b] = process.argv //  node index 1 2
//console.log(new Calc(0.2).sum(0.1).finish());
console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());