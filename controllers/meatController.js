// Bring in our meat data
const meats = require('../models/meats')

// GET /meats 
module.exports.index = (req, res) => {
    res.render('./meats/Index', { meats })
}

// GET /meats/search
module.exports.search = (req, res) => {
    res.render('./meats/Search')
  }
  
  // GET /meats/filter
  module.exports.filter = (req, res) => {
    let { color, name, readyToEat } = req.query    
    readyToEat = (readyToEat == 'on')
    
    const filtered = meats
      .filter(item => (name ? item.name.includes(name) : item))
      .filter(item => (color ? item.color.includes(color) : item))
      .filter(item =>
        item.readyToEat.toString() === readyToEat.toString()
      );
  
      res.render('./meats/Filter', { filtered })
  }

// GET /meats/:indexOfFruits
module.exports.show = (req, res) => {
  if(meats[req.params.indexOfMeat]) {
    res.render('./meats/Show', {meat: meats[req.params.indexOfMeat], index: req.params.indexOfMeat})
  } else {
    res.redirect('/meats')
  }    
}

// GET /meats/new
module.exports.new = (req, res) => {
    res.render('meats/New')
}

// GET /meats/:indexOfMeat/edit
module.exports.edit = (req, res) => { 
  res.render('meats/Edit', { meat: meats[req.params.indexOfMeat], index: req.params.indexOfMeat })
}

// POST /meats
module.exports.create = (req, res) => {
    console.log('POST /meats')
    console.log(req.body) // <- should contain our form data
    // if(req.body.readyToEat === 'on') {
    //   req.body.readyToEat = true
    // } else {
    //   req.body.readyToEat = false
    // }
    // one line evaluator of above if else
    req.body.readyToEat = (req.body.readyToEat === 'on')
    meats.push(req.body)
    res.redirect('/meats')
}

// because new is a keyword we take the export from the bottom and add it to each of the lines and change the 
// functions into arrow functions

//DELETE /meats/:indexOfFruits
module.exports.destroy = (req, res) => {
  console.log('DELETE /meats/:indexOfFruits')
  // meats.findIndex((meat, index) => index == req.params.indexOfMeat)
  let index = Number(req.params.indexOfMeat)
  meats.splice(index, 1)
  res.redirect('/meats')
}

// PUT /meats/:indexOfMeat
module.exports.update = (req, res) => {
  console.log('PUT /meats/:indexOfMeat')

  req.body.readyToEat = (req.body.readyToEat === 'on')

  meats[req.params.indexOfMeat] = req.body

  res.redirect('/meats')
}