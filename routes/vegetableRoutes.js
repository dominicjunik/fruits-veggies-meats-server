const express = require('express')


// Create our router
const router = express.Router()

// Bring in our controller logic
const vegetableController = require('../controllers/vegetableController')

// to organize routes  I.N.D.U.C.E.S (index, new, destroy, update, create, edit, show)

// "index" route      //   localhost:8080/fruits/
router.get('/', vegetableController.index)

//  "new" route   //   localhost:8080/fruits/new
router.get('/new', vegetableController.new)

//  "destroy" route
router.delete('/:indexOfVegetable', vegetableController.destroy)

//  "update" route
router.put('/:indexOfVegetable', vegetableController.update)

//  "filter" route     //   localhost:8080/fruits/filter
router.get('/filter', vegetableController.filter)

//  "create" route
router.post('/', vegetableController.create)

//  "edit" route
router.get('/:indexOfVegetable/edit', vegetableController.edit)

//  "show" route      //   localhost:8080/fruits/:indexOfVegetable
router.get('/:indexOfVegetable', vegetableController.show)

module.exports = router