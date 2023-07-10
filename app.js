const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config({path: './config.env'});

require('./db/connection');


//we link the router files to make our route easy
app.use(require('./router/auth'));
app.use(express.json());


app.use(express.static(path.join(__dirname, './server/client/todolist/build')));

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, "./server/client/todolist/build/index.html"))
}) 




  app.get('/', (req, res)=>{
     res.send("hello login world");
  
  });
 


  app.listen(PORT, (req, res) => {
   console.log(`Server is running on http://localhost:${PORT}`);
 });
 