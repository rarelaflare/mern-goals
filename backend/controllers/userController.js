const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

/*
    @desc Register new User
    @route POST /api/users
    @access Public
*/
const registerUser = asyncHandler(async(req, res) => {
    /* 
        Destructure the request body & create a variable for:
        'user name' = name
        'user email' = email
        'user password' = password
    */
    const { name, email, password } = req.body;

    // Check if all values have been submitted
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add Missing Field')
    }

    // Check if user already exists in database by email
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    // salt needed to hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    

    // Create User & store hashed password

    const user = await User.create({
        name,
        email, 
        password: hashedPassword
    })

    // Response is a user object
    // this is the data that will get passed back
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            /*
                passing user that's created id to the generateToken function
            */ 
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')

    }

    res.json({message: 'Register User'})
})
// End of RegisterUser Function

/*
    @desc Register new User
    @route POST /api/users/login
    @access Public
*/

const loginUser = asyncHandler(async(req, res) => {
    
    const {email, password} = req.body

    // Check for user email
    /*
        find user by email & also need to match password    
    */
    const user = await User.findOne({email});
    
    // Check password
    /*
        checks if user is found & 
        uses the bcrypt compare method, which takes the hashed password and the 
    */
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})


/*
    @desc Get user data
    @route POST /api/users/me
    @access Private
    For a routes access to go from public to private (Protected route)
    you need to add / create custome middleware function to run in the request/response cycle
*/
const getMe = asyncHandler(async(req, res) => {
    res.json({message: 'Display User Data '})
})

/*
    Create function to generate JWT token

    the user id is passed to the function

    we should be able to get the user id when we send the token, this is how we VALIDATE data
*/ 

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
}