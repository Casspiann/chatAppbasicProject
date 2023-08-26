const http = require('http');
const express = require('express');
const app = express();
//const routes = require('./rout');

//const server = http.createServer(routes.handler);
//console.log(routes.someText);
app.use((req,res,next)=>{
  console.log("In the middlewre");
  next();
})
app.use((req,res,next)=>{
  console.log("In another middlewre");
  res.send('<h1>Hello from Express!</h1>');
 // res.send( { key1: 'value' });
 // next();
})
app.listen(3000);
/*
const server = http.createServer(app);
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
  
});*/

/*var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello   World!');
  res.end();
}).listen(8080)
console.log("Tarun Rana");*/