const express = require('express')


// Create our router
const router = express.Router()

// Bring in our controller logic
const fruitController = require('../controllers/fruitController')

// to organize routes  I.N.D.U.C.E.S (index, new, destroy, update, create, edit, show)

// "index" route      //   localhost:8080/fruits/
router.get('/', fruitController.index)

//  "new" route   //   localhost:8080/fruits/new
router.get('/new', fruitController.new)

//  "destroy" route
router.delete('/:indexOfFruit', fruitController.destroy)

//  "update" route
router.put('/:indexOfFruit', fruitController.update)

//  "filter" route     //   localhost:8080/fruits/filter
router.get('/filter', fruitController.filter)

//  "create" route
router.post('/', fruitController.create)

//  "edit" route
router.get('/:indexOfFruit/edit', fruitController.edit)

//  "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:indexOfFruit', fruitController.show)

module.exports = router