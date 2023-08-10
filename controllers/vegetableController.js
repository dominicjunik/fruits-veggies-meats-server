// Bring in our vegetable data
const vegetables = require('../models/vegetables')

// GET /vegetables 
module.exports.index = (req, res) => {
    res.render('./vegetables/Index', { vegetables })
}

module.exports.filter = (req, res) => {
  let { color, name, readyToEat } = req.query    

  const filtered = vegetables
    .filter(item => (name ? item.name.includes(name) : item))
    .filter(item => (color ? item.color.includes(color) : item))
    .filter(item =>
      readyToEat ? item.readyToEat === JSON.parse(readyToEat) : item
    );

    res.render('./vegetables/Filter', { filtered })
}


// GET /vegetables/:indexOfVegetable
module.exports.show = (req, res) => {
  if(vegetables[req.params.indexOfVegetable]) {
    res.render('./vegetables/Show', {vegetable: vegetables[req.params.indexOfVegetable], index: req.params.indexOfVegetable})
  } else {
    res.redirect('/vegetables')
  }    
}

// GET /vegetables/new
module.exports.new = (req, res) => {
    res.render('vegetables/New')
}

// GET /vegetables/:indexOfVegetable/edit
module.exports.edit = (req, res) => { 
  res.render('vegetables/Edit', { vegetable: vegetables[req.params.indexOfVegetable], index: req.params.indexOfVegetable })
}

// POST /vegetables
module.exports.create = (req, res) => {
    console.log('POST /vegetables')
    console.log(req.body) // <- should contain our form data
    // if(req.body.readyToEat === 'on') {
    //   req.body.readyToEat = true
    // } else {
    //   req.body.readyToEat = false
    // }
    // one line evaluator of above if else
    req.body.readyToEat = (req.body.readyToEat === 'on')
    vegetables.push(req.body)
    res.redirect('/vegetables')
}

// because new is a keyword we take the export from the bottom and add it to each of the lines and change the 
// functions into arrow functions

//DELETE /vegetables/:indexOfFruits
module.exports.destroy = (req, res) => {
  console.log('DELETE /vegetables/:indexOfFruits')
  // vegetables.findIndex((vegetable, index) => index == req.params.indexOfVegetable)
  let index = Number(req.params.indexOfVegetable)
  vegetables.splice(index, 1)
  res.redirect('/vegetables')
}

// PUT /vegetables/:indexOfVegetable
module.exports.update = (req, res) => {
  console.log('PUT /vegetables/:indexOfVegetable')

  req.body.readyToEat = (req.body.readyToEat === 'on')

  vegetables[req.params.indexOfVegetable] = req.body

  res.redirect('/vegetables')
}