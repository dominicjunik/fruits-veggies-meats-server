const express = require("express");

require('dotenv').config()

const mongoConfig = require('./config')

const app = express();

const PORT = 8080;

mongoConfig()
const fruitRoutes = require('./routes/fruitRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const meatRoutes = require('./routes/meatRoutes')

// SETUP OUR VIEW ENGINE
// its important to call the folder 'views' because the engine looks for it by default
// load the create engine function
const jsxEngine = require('jsx-view-engine')

// load the method override function
const methodOverride = require('method-override')

//configure the view engine functio nand look for files engin in jsx
app.set('view engine', 'jsx')
// create the engine and accept the files ending in jsx
app.engine('jsx', jsxEngine())
// END

// give our form more HTTP methods to work with like DELETE and PUT
app.use(methodOverride('_method'))


// A middleware that formats the data into an object we can use on req.body
// we had to use this because of the oldschool HTML form but eventually it will be JSON data
// this has to go above our routes so we format our data first 
app.use(express.urlencoded({ extended: true }))

// Connect our food routes to our express app
app.use('/fruits', fruitRoutes)
app.use('/vegetables', vegetableRoutes)
app.use('/meats', meatRoutes)

// "root" route         
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT, process.env.MONGO_URL)
})


