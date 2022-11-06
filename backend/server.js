/*
Express - Routing & Middleware framework

    - Entry point to Backend of application "The Server" or "Web Server"
    - use built-in require function to include express module in folder
    - require reads javascript files, executes javascript files, &
    returns the exports objects
*/
const express = require('express');

// import dotenv package for environment variable
const dotenv = require('dotenv').config();

const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;


// This asynchronous Function connects to a MongoDB Instance
connectDB()

// express function is a top-level function exported by the express module (program)
/*
    creates an instance of a callable function object exported by the express module

    the app object has methods for:
    
    * routing http request - see app.method & app.param
    * configuring middleware - see app.route
    * rendering html views - see app.render
    * registering a template engine - see app.engine
    * 
    * also has properties (settings) that affect how the application behaves - see application settings
 
    bind application level middleware to an instance of the app object by using app.use() &
    app.METHOD functions
 
    */
const app = express()

// Middleware
/*
    - app.use() mounts the specified middleware function or functions at the specified path
    - the middleware function is executed when base of the requested path matches 'path'
    - path is the middleware function invoked. can be any of the following:
    
    * a string representing a path
    * a path pattern
    * a regular expression pattern to match paths
    * an array of combinations of any of the above
    * default is '/' (root path)

*/



//To use body data a few lines of middleware are needed

/*
    express.json() parses incoming request with JSON payloads and is based on body-parser
    - body parser for raw json
*/
app.use(express.json())

/*
    - parses incoming request with urlencoded payloads & is based on body-parser

    - returns middleware that only parses urlencoded bodies and only looks at 
    request where the content-type header matches the type option

    - accepts only utf-8 encoding of the body

    - a new body object containing the parsed data is populated on the request 
    object after middleware or an empty object if no body to parse
*/
app.use(express.urlencoded({extended: false}))

//Creating first route

/*
    For app.use:
    1. specify route "/api/goals"
    2. for the 2nd argument we require a file with specific routes
*/
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Express Error Handler is overwritten
app.use(errorHandler)


/*
    binds and listens for connections on the specified host & port.

    - this method is identical to Node's http.Server.listen
*/
app.listen(port, () => {
    console.log(`Server started on port ${port}`)

    
}
    );