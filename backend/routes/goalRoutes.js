/*
    Each resource for api should have its own route folder / file

    es2015 syntax can be used to, but other steps needed
*/
// Common JS Module syntax 
const express = require('express')

// Used to create a new router object to handle request
const router = express.Router()

// importing functions from controller folder
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

// Path plus callback functions

router.route('/').get(getGoals).post(setGoal);

router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router