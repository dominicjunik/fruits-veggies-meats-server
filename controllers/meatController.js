// Bring in our meats data
const meats = require('../models/meats')

// The callback function from the "index" route 
function index(req, res) {
    res.render('./meats/Index', { meats })
}

function filter(req, res) {
    let { state, name, readyToEat } = req.query  

    const filtered = meats
        .filter(item => (name ? item.name.includes(name) : item))
        .filter(item => (state ? item.state.includes(state) : item))
        .filter(item =>
        readyToEat ? item.readyToEat === JSON.parse(readyToEat) : item
        );

        res.render('./meats/Filter', { filtered })
}

// The callback function from the "show" route
function show(req, res) {
    res.render('./meats/Show', {meat: meats[req.params.indexOfMeat]})
}

module.exports = {
    index, 
    show,
    filter
}