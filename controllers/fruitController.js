// Bring in our fruit data
const fruits = require('../models/fruits')

// GET /fruits 
module.exports.index = (req, res) => {
    res.render('./fruits/Index', { fruits })
}

module.exports.filter = (req, res) => {
  let { color, name, readyToEat } = req.query    

  const filtered = fruits
    .filter(item => (name ? item.name.includes(name) : item))
    .filter(item => (color ? item.color.includes(color) : item))
    .filter(item =>
      readyToEat ? item.readyToEat === JSON.parse(readyToEat) : item
    );

    res.render('./fruits/Filter', { filtered })
}


// GET /fruits/:indexOfFruits
module.exports.show = (req, res) => {
    res.render('./fruits/Show', {fruit: fruits[req.params.indexOfFruit]})
}

// GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

// POST /fruits
module.exports.create = (req, res) => {
    console.log('POST /fruits')
    console.log(req.body) // <- should contain our form data
    res.send('POST /fruits')
}

// because new is a keyword we take the export from the bottom and add it to each of the lines and change the 
// functions into arrow functions