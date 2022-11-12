const mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ca1: {
        type : Number,
        required : true
    },
    ca2: {
        type : Number,
        required : true
    },
    ca3: {
        type : Number,
        required : true
    }

})



module.exports = mongoose.model('Marks', StudentSchema);;