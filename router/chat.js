
const express = require('express');
//const data = require('./data'); // Corrected the path separator
const fs = require('fs');

const rout = express.Router();

rout.get('/', (req, res, next) => {
  fs.readFile("userName.txt",(error,data)=>{
    if(error){
      console.log(error);
      data = "No Chats Exists";
    }
    res.send(`
    ${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method ="POST">
      <input id="message" type="text" name="message" placeholder="message">
      <input id="username" type="hidden" name="username" ><br>
      <button type="submit">Send</button>
    </form>
  `);
    
  })
  
});

rout.post('/', (req, res, next) => {
  const username = req.body.username;
  const message = req.body.message;
  //const data = [];
  
  // Assuming you want to push the data into the "data" array
 // data.push({ username, message });
 const messageToWrite = `${username}:${message}`;

 // Write the message to the file using fs.writeFile
 fs.writeFile("userName.txt", messageToWrite+" , ", { flag: 'a' }, (err) => {
   if (err) {
     console.log(err);
     res.status(500).send("Error writing to file");
   } else {
     res.redirect('/');
   }
 });
});
module.exports= rout;
