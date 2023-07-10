const mongoose = require('mongoose');

const DB = "mongodb+srv://nitinsingh:negi@nitincluster.qgosivf.mongodb.net/nitincluster?retryWrites=true&w=majority";


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(() =>{
    console.log("connected successfully")
 }).catch((err) =>{
    console.log(err);
 })