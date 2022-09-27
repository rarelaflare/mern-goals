// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'get goals'})
}

// @desc Set goals
// @route Set /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({message: 'set goal'})
}

// @desc Pust goals
// @route Get /api/goals
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}


// to use in application export
module.exports = {
    getGoals,
    setGoal, 
    updateGoal,
    deleteGoal
}