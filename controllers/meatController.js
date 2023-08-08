// Bring in our meats data
const meats = require('../models/meats')

// The callback function from the "index" route 
function index(req, res) {
    res.send(meats)
}

function filter(req, res) {
    let state = req.query.state;
    let name = req.query.name;
    let readyToEat = req.query.readyToEat;

    const filtered = meats
        .filter(item => (name ? item.name.includes(name) : item))
        .filter(item => (state ? item.state.includes(state) : item))
        .filter(item =>
        readyToEat ? item.readyToEat === JSON.parse(readyToEat) : item
        );

    res.send(filtered);
}

// The callback function from the "show" route
function show(req, res) {
    res.send(meats[req.params.indexOfMeat])
}

module.exports = {
    index, 
    show,
    filter
}