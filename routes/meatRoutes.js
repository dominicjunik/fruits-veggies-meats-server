const express = require('express')


// Create our router
const router = express.Router()

// Bring in our controller logic
const meatController = require('../controllers/meatController')

// to organize routes  I.N.D.U.C.E.S (index, new, destroy, update, create, edit, show)

// "index" route      //   localhost:8080/fruits/
router.get('/', meatController.index)

//  "new" route   //   localhost:8080/fruits/new
router.get('/new', meatController.new)

//  "destroy" route
router.delete('/:indexOfMeat', meatController.destroy)

//  "update" route
router.put('/:indexOfMeat', meatController.update)

//  "filter" route     //   localhost:8080/fruits/filter
router.get('/filter', meatController.filter)

//  "create" route
router.post('/', meatController.create)

//  "edit" route
router.get('/:indexOfMeat/edit', meatController.edit)

//  "show" route      //   localhost:8080/fruits/:indexOfMeat
router.get('/:indexOfMeat', meatController.show)

module.exports = router