const asyncHandler = require('express-async-handler')

// Importing the Goal Model into the controller file
// The Goal variable has access to the mongoose methods
const Goal = require('../models/goalModel')
const User = require('../models/userModel')
// @desc Get goals
// @route Get /api/goals
// @access Private

/*
    creates a get goals function

    always keep in mind the description of the function, the actual route, and the access
*/

/*
    when we use mongoose in each function to interact with database, 
    we get returned a promise
    
    - we add the async keyword to each function

    - to avoid using try/catch syntax the asynchandler package is imported


*/
const getGoals = asyncHandler(async (req, res) => {
    // Goal.find() finds all documents in collection
    //const goals = await Goal.find()
    
    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals)
})

// @desc Set goals
// @route Set /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
        
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter text')
    }

    // Creating a variable that creates one or more documents in the database
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})

// @desc Update goal
// @route Put /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
   
    // Finds a single document by its id field
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    // issues a mongodb findAndModify update command by a documents id field
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    // remove() removes all documents that match conditions from the collection
    await goal.remove()

    res.status(200).json({ id: req.params.id})
})


// to use in application export
module.exports = {
    getGoals,
    setGoal, 
    updateGoal,
    deleteGoal,
}