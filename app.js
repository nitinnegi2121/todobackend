const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// require('dotenv').config();

dotenv.config({path: './config.env'});
const PORT = process.env.PORT;

require('./db/connection');


//we link the router files to make our route easy
app.use(cors());

app.use(require('./router/auth'));
app.use(express.json());






  app.get('/', (req, res)=>{
     res.send("hello login world");
  
  });
 


  app.listen(PORT, (req, res) => {
   console.log(`Server is running on http://localhost:${PORT}`);
 });
 