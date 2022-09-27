// Common JS Module syntax
const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

// Path plus callback functions

router.get('/', getGoals);

router.post('/', setGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);
module.exports = router