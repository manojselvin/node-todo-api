const mongoose = require('mongoose');

let User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    age: {
        type: Number,
        min: 18
    },
    location: {
        type: String
    }
});

module.exports = { User };