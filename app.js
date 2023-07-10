const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');

const app = express();

dotenv.config({path: './config.env'});

require('./db/connection');


//we link the router files to make our route easy
app.use(require('./router/auth'));
app.use(express.json());

const PORT = process.env.PORT


  app.get('/', (req, res)=>{
     res.send("hello login world");
  
  });
 

  app.listen(PORT, (req, res) => {
   console.log(`Server is running on http://localhost:${PORT}`);
 });
 