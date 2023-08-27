//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoute = require('./routes/admin');

const shopRoute = require('./routes/shop');
//const routes = require('./rout');

//const server = http.createServer(routes.handler);
//console.log(routes.someText);
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoute);
app.use(shopRoute);

app.use((req,res,next)=>{
     res.status(404).send('<h1>Page Not found !</h1>');
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