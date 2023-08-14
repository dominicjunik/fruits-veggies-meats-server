// Bring in our fruit data from prebuitl array
let fruits = require('../models/fruits')

//database data import
const Fruit = require('../models/Fruit')

// GET /fruits 
module.exports.index = async (req, res) => {
  let fruits;
  
  try {
      // testing find params 
      fruits = await Fruit.find(req.query).sort( {"name": 1})
      // fruits = await Fruit.find({name: 'Pear'}) // -> finds all documents with name: "pear"
      // fruits = await Fruit.find({name: { $ne: 'Pear' } }) // finds all that $NotEqual "pear" 
      // fruits = await Fruit.find({}, { color: 0}) // -> finds all fruit data without colors NOTE: cannot do inclusion and exclusion at the same time
      // fruits = await Fruit.find({ $or: [{color: "Green"}, {name: "Black Berry"}, {color: "Purple"}]}) // finds fruits with color Green or Purple or name apple
      // fruits = await Fruit.find().sort( {"name": 1}) // -> alphabetical order of names -1 to reverse order

      console.log(fruits)
  } catch(err) {
      console.log('Failed to create a Fruit document: ', err)
  }
  
  console.log(fruits)
  res.render('fruits/Index', { fruits })
}


// GET /fruits/search
module.exports.search = (req, res) => {
  res.render('./fruits/Search')
}

// GET /fruits/filter
module.exports.filter = async (req, res) => {
  let filtered  
  let { color, name, readyToEat } = req.query    
  readyToEat = (readyToEat == 'on')
  
  // const filtered = fruits
  //   .filter(item => (name ? item.name.includes(name) : item))
  //   .filter(item => (color ? item.color.includes(color) : item))
  //   .filter(item =>
  //     item.readyToEat.toString() === readyToEat.toString()
  //   );
 
  try {
    filtered = await Fruit.find({name, color, readyToEat})  
    console.log(filtered)
  } catch(err) {
      console.log('Failed to create a Fruit document: ', err)
  }

    res.render('./fruits/Filter', { filtered })
}


// GET /fruits/:id
module.exports.show = async (req, res) => {
  console.log('GET /fruits/:id')
  let fruit;

  try {
    fruit = await Fruit.findById(req.params.id)
    console.log(fruit)
  }catch(err){
    console.log('Failed to find fruit document with id ' + req.params.id, err)
  }
  
  if(fruit) {
    res.render('./fruits/Show', { fruit })
  } else {
    res.redirect('/fruits')
  }    
}

// GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

// GET /fruits/:id/edit
module.exports.edit = async (req, res) => {
  console.log('GET /fruits/:id/edit')
  let fruit;

  try {
    fruit = await Fruit.findById(req.params.id)
    console.log(fruit)
    res.render('fruits/Edit', { fruit })
  }catch(err){
    console.log('Failed to find fruit document with id ' + req.params.id, err)
    res.redirect(`/fruits/${req.params.id}`)
  }

  
}

// POST /fruits
module.exports.create = async (req, res) => {
  console.log('POST /fruits')
  console.log(req.body) 

  req.body.readyToEat = (req.body.readyToEat === 'on')

  try {
      let fruit = await Fruit.create(req.body)
      // example of creating a local data set first then saving it 
      // let fruit = new Fruit(req.body)
      // fruit.save()
      console.log(fruit)
  } catch(err) {
      console.log('Failed to create a Fruit document: ', err)
  }

  // fruits.push(req.body)
  res.redirect('/fruits')
}

//DELETE /fruits/:id
module.exports.destroy = async (req, res) => {
  console.log('DELETE /fruits/:id')

  try {
    await Fruit.findByIdAndDelete(req.params.id)
  } catch(err) {
    console.log('err on delete: ' + err)
  }
  
  res.redirect('/fruits')
}

// PUT /fruits/:id
module.exports.update = async (req, res) => {
  console.log('PUT /fruits/:id')

  req.body.readyToEat = (req.body.readyToEat === 'on')

  try {
    await Fruit.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/fruits/${req.params.id}`)
  } catch (err) {
    console.log(err.message)
    res.redirect(`/fruits/${req.params.id}/edit`)
  }
  

 
}

// POST /fruits/seed
module.exports.seed = async (req, res) => {

  try {
      await Fruit.deleteMany()
      await Fruit.create(fruits) // [ {}, {}, {} ]
  } catch(err) {
      console.log(err.message)
  }

  res.redirect('/fruits')
}

// DELETE /fruits/clear
module.exports.clear = async (req, res) => {

  try {
    await Fruit.deleteMany()
  } catch(err) {
    console.log(err.message)
  }

  res.redirect('/fruits')
}