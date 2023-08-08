const express = require('express')


// Create our router
const router = express.Router()

// Bring in our controller logic
const meatController = require('../controllers/meatController')

// "index" route      //   localhost:8080/fruits/
router.get('/', meatController.index)

router.get('/filter', meatController.filter)

// "show" route      //   localhost:8080/meats/:indexOfFruit
router.get('/:indexOfMeat', meatController.show)

module.exports = router