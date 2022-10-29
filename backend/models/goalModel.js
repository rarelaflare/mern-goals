const mongoose = require('mongoose')

// Create schema
/*
    Each schema maps to a mongoDB collection & defines the shape of the document within 
    a collection
*/
const goalSchema = mongoose.Schema(
{
    text: {
        type: String,
        require: [true, 'please add a text value'],
    }
}, {
    timestamps: true,
})

/*
    Exports and compiles the 'Goal' model

    - an instance of a model is called a document
    - models are fancy constructors compiled from Schema definitions
    - models are responsible for creating & reading documents from the underlying MongoDB Database
    see: https://mongoosejs.com/docs/models.html

- When you call mongoose.model() on a schema, mongoose compiles the model for you

- the first arg is the singular name of the collection your model is for 'Goal'
- mongoose automatically looks for the plural lowercased version of your model name 'goalSchema'
*/
module.exports = mongoose.model('Goal', goalSchema)