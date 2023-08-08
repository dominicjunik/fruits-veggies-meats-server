// Bring in our fruit data
const fruits = require('../models/fruits')

// The callback function from the "index" route 
function index(req, res) {
    res.send(fruits)
}

function filter(req, res) {
    let color = req.query.color;
  let name = req.query.name;
  let readyToEat = req.query.readyToEat;

  const filtered = fruits
    .filter(item => (name ? item.name.includes(name) : item))
    .filter(item => (color ? item.color.includes(color) : item))
    .filter(item =>
      readyToEat ? item.readyToEat === JSON.parse(readyToEat) : item
    );

  res.send(filtered);
}


// The callback function from the "show" route
function show(req, res) {
    res.send(fruits[req.params.indexOfFruit])
}

module.exports = {
    index, 
    show, 
    filter
}