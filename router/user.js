const express = require('express');

const rout =  express.Router();

rout.get('/login',(req,res,next)=>{
    console.log("user login");
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method ="POST"><input type="text" id="username" name="title"><button type="submit">login</button></input></input></form>');
   
  });
rout.post('/login',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
  })

module.exports = rout