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

const { protect } = require('../middleware/authMiddleware')


// Path plus callback functions
router.route('/').get( protect, getGoals).post( protect, setGoal );

router.route('/:id').put( protect, updateGoal ).delete( protect, deleteGoal );

module.exports = router