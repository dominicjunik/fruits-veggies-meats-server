// Bring in our fruit data
const fruits = require('../models/fruits')

// GET /fruits 
module.exports.index = (req, res) => {
    res.render('./fruits/Index', { fruits })
}


// GET /fruits/search
module.exports.search = (req, res) => {
  res.render('./fruits/Search')
}

// GET /fruits/filter
module.exports.filter = (req, res) => {
  let { color, name, readyToEat } = req.query    
  readyToEat = (readyToEat == 'on')
  
  const filtered = fruits
    .filter(item => (name ? item.name.includes(name) : item))
    .filter(item => (color ? item.color.includes(color) : item))
    .filter(item =>
      item.readyToEat.toString() === readyToEat.toString()
    );

    res.render('./fruits/Filter', { filtered })
}


// GET /fruits/:indexOfFruits
module.exports.show = (req, res) => {
  if(fruits[req.params.indexOfFruit]) {
    res.render('./fruits/Show', {fruit: fruits[req.params.indexOfFruit], index: req.params.indexOfFruit})
  } else {
    res.redirect('/fruits')
  }    
}

// GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

// GET /fruits/:indexOfFruit/edit
module.exports.edit = (req, res) => { 
  res.render('fruits/Edit', { fruit: fruits[req.params.indexOfFruit], index: req.params.indexOfFruit })
}

// POST /fruits
module.exports.create = (req, res) => {
    console.log('POST /fruits')
    console.log(req.body) // <- should contain our form data
    // if(req.body.readyToEat === 'on') {
    //   req.body.readyToEat = true
    // } else {
    //   req.body.readyToEat = false
    // }
    // one line evaluator of above if else
    req.body.readyToEat = (req.body.readyToEat === 'on')
    fruits.push(req.body)
    res.redirect('/fruits')
}

// because new is a keyword we take the export from the bottom and add it to each of the lines and change the 
// functions into arrow functions

//DELETE /fruits/:indexOfFruits
module.exports.destroy = (req, res) => {
  console.log('DELETE /fruits/:indexOfFruits')
  // fruits.findIndex((fruit, index) => index == req.params.indexOfFruit)
  let index = Number(req.params.indexOfFruit)
  fruits.splice(index, 1)
  res.redirect('/fruits')
}

// PUT /fruits/:indexOfFruit
module.exports.update = (req, res) => {
  console.log('PUT /fruits/:indexOfFruit')

  req.body.readyToEat = (req.body.readyToEat === 'on')

  fruits[req.params.indexOfFruit] = req.body

  res.redirect('/fruits')
}