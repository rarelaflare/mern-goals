/*
File Connects Database to application
    All mongoose methods are asynchronous and return a promise
    - Mongoose is an ODM
*/
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        /* 
            - Variable tries to connect to mongoDB using a URI connection string stored
              in an environment variable 

            - the connect() function also accepts a callback parameter and returns a promise
        */
        const conn = await mongoose.connect(process.env.MONGO_URI)

        /*
            calling mongoose.connect() makes a default connection to mongoDB
            you can access the default connection by using 'mongoose.connection'

            - for this step make sure (to avoid errors):
            database access is set up properly 
            check URI string is correct

        */
       
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


module.exports = connectDB