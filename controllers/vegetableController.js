// Bring in our fruit data
const vegetables = require('../models/vegetables')

// The callback function from the "index" route 
function index(req, res) {
    res.render('./vegetables/Index', { vegetables })
}

// The callback function from the "show" route
function show(req, res) {
    res.render('./vegetables/Show', {vegetable: vegetables[req.params.indexOfVegetable]})
}

function filter(req, res) {
    let { color, name, readyToEat } = req.query  

    const filtered = vegetables 
        .filter(item => (name ? item.name.includes(name) : item))
        .filter(item => (color ? item.color.includes(color) : item))
        .filter(item =>
        readyToEat ? item.readyToEat === JSON.parse(readyToEat) : item
        );

    // res.send(filtered);
    res.render('./vegetables/Filter', { filtered })
}
module.exports = {
    index, 
    show, 
    filter
}