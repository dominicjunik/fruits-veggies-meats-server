const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fruitSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    color: {
        type:String,
        required: true
    },
    readyToEat: {
        type:Boolean,
        required: true
    }
})

// takes two arguments, first argument = collection, second schema
// the convention is uppercase names  
const Fruit = mongoose.model('fruits', fruitSchema)

module.exports = Fruit