const mongoose = require("mongoose");

const Listschema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required : true
    }
});

const List = mongoose.model('List', Listschema);

module.exports = List; 