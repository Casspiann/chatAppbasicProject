const express = require('express');
const bodyParser = require('body-parser');
const chatApp = express();

const userRoute = require('./router/user');
const chatRoute = require('./router/chat');

//const shopRoute = require('./routes/shop');

chatApp.use(bodyParser.urlencoded({extended: false}));
chatApp.use(userRoute);
chatApp.use(chatRoute)

chatApp.use((req,res,next)=>{
     res.send('<h4>No Chat Exist </h4>');
});


chatApp.listen(3000);