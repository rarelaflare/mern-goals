// Entry Point to application server
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Creating first route

app.use('/api/goals', require('./routes/goalRoutes'))

// Express Error Handler
app.use(errorHandler)



app.listen(port, () => console.log(`Server started on port ${port}`))