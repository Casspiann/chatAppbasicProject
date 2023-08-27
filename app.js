//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const routes = require('./rout');

//const server = http.createServer(routes.handler);
//console.log(routes.someText);
app.use(bodyParser.urlencoded({extended: false}));
app.use('/add-product',(req,res,next)=>{
  console.log("In another middlewre");
  res.send('<form action="/product" method ="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
 // res.send( { key1: 'value' });
 // next();
});
app.post('/product',(req,res,next) =>{
  console.log(req.body);
  res.redirect('/');
})
app.use('/',(req,res,next)=>{
  console.log("In another middlewre");
  res.send('<h1>Hello from Express!</h1>');
 // res.send( { key1: 'value' });
 // next();
});
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