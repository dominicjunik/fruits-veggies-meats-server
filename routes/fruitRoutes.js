const express = require('express')


// Create our router
const router = express.Router()

// Bring in our controller logic
const fruitController = require('../controllers/fruitController')

// to organize routes  I.N.D.U.C.E.S (index, new, destroy, update, create, edit, show)

//  "index" route      //   localhost:8080/fruits/
router.get('/', fruitController.index)

//  "new" route   //   localhost:8080/fruits/new
router.get('/new', fruitController.new)

// "clear" route
router.delete('/clear', fruitController.clear)

//  "destroy" route
router.delete('/:id', fruitController.destroy)

//  "update" route
router.put('/:id', fruitController.update)

//  "filter" route     //   localhost:8080/fruits/filter
router.get('/filter', fruitController.filter)

//  "search" route
router.get('/search', fruitController.search)

//  "create" route
router.post('/', fruitController.create)

// "seed" route
router.post('/seed', fruitController.seed)

//  "edit" route
router.get('/:id/edit', fruitController.edit)

//  "show" route      //   localhost:8080/fruits/:id
router.get('/:id', fruitController.show)

module.exports = router