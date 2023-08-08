// Bring in our fruit data
const fruits = require('../models/fruits')

// The callback function from the "index" route 
function index(req, res) {
    res.render('./fruits/Index', { fruits })
}

function filter(req, res) {
  let { color, name, readyToEat } = req.query    

  const filtered = fruits
    .filter(item => (name ? item.name.includes(name) : item))
    .filter(item => (color ? item.color.includes(color) : item))
    .filter(item =>
      readyToEat ? item.readyToEat === JSON.parse(readyToEat) : item
    );

    res.render('./fruits/Filter', { filtered })
}


// The callback function from the "show" route
function show(req, res) {
    res.render('./fruits/Show', {fruit: fruits[req.params.indexOfFruit]})
}

module.exports = {
    index, 
    show, 
    filter
}