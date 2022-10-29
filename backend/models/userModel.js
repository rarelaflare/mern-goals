// ODM to interact with MongoDB
const mongoose = require('mongoose');

/*
    This model has a relationship with the goal model

    - we need to know which user creates each goal
    - every goal is associated with a user
*/
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Please add a password']
    }, 
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)