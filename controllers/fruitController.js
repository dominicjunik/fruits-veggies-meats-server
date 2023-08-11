// Bring in our fruit data
let fruits = require('../models/fruits')


const Fruit = require('../models/Fruit')
// GET /fruits 
module.exports.index = async (req, res) => {
  let fruits;
  
  try {
      fruits = await Fruit.find()
      console.log(fruits)
  } catch(err) {
      console.log('Failed to create a Fruit document: ', err)
  }
  
  console.log(fruits)
  res.render('fruits/Index', { fruits })
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


// GET /fruits/:id
module.exports.show = async (req, res) => {
  console.log('GET /fruits/:id')
  let fruit;

  try {
    fruit = await Fruit.findById(req.params.id)
    console.log(fruit)
  }catch(err){
    console.log('Failed to find fruit document with id ' + req.params.id, err)
  }
  
  if(fruit) {
    res.render('./fruits/Show', { fruit })
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
module.exports.create = async (req, res) => {
  console.log('POST /fruits')
  console.log(req.body) 

  req.body.readyToEat = (req.body.readyToEat === 'on')

  try {
      let fruit = await Fruit.create(req.body)
      console.log(fruit)
  } catch(err) {
      console.log('Failed to create a Fruit document: ', err)
  }

  // fruits.push(req.body)
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