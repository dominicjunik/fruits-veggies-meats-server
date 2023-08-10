const express = require('express')


// Create our router
const router = express.Router()

// Bring in our controller logic
const fruitController = require('../controllers/fruitController')

// to organize routes  I.N.D.U.C.E.S (index, new, delete, update, create, edit, show)

// "index" route      //   localhost:8080/fruits/
router.get('/', fruitController.index)

//  "create new" route   //   localhost:8080/fruits/new
router.get('/new', fruitController.new)

// "filter" route     //   localhost:8080/fruits/filter
router.get('/filter', fruitController.filter)

// "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:indexOfFruit', fruitController.show)

module.exports = router