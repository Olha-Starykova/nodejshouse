// const {getCurrentDate} = require('./dateUtils')

// //console.log(`getCurrentDate:  ${getCurrentDate()}`);
// //console.log(123456);

// //console.log(process.env)
// //console.log(process.argv)
// console.log (__dirname);
// console.log(__filename)

// const Calc = require('calc-js').Calc;

// console.log(process.argv)
// const [,,a,b] = process.argv //  node index 1 2
// //console.log(new Calc(0.2).sum(0.1).finish()); 
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

//=================02======================
// const http = require('http');
// const fs = require('fs').promises;


// const PORT = 8081;

// //запрос, ответ обратаботчик запросов
// const requestHandler = (request, response) => {
//     if (request.url.indexOf('/home') >= 0) {
//         response.writeHead(200, { 'Content-type': 'text/json' });
//         return response.end('{"url": "homepage"}');
//     }
//     // response.writeHead(200, { 'Content-type': 'text/html' })
//     // response.end('<h1>GOIT</h1>')
//      response.writeHead(200, { 'Content-type': 'text/json' })
//     return  response.end('{"url": "other"}')
// }

// const server = http.createServer(requestHandler);
   
// server.listen(8081, (err) => {
//     if (err) {
//         console.error('error at ', err)
//     }
//     console.log(`Server  ${PORT}`)
// })
