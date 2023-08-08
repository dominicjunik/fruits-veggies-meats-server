const express = require("express");

const app = express();

const PORT = 8080;

const fruitRoutes = require('./routes/fruitRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const meatRoutes = require('./routes/meatRoutes')

// Connect our fruit routes to our express app
app.use('/fruits', fruitRoutes)
app.use('/vegetables', vegetableRoutes)
app.use('/meats', meatRoutes)

// Connect our vegetable routes to our express app

// "root" route         
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})


// // example of an index route
// app.get("/fruits", (req, res) => {
// 	res.send(fruits);
// });

// example of filter using query
// app.get("/fruits/filter", (req, res) => {
//     let name = req.query.name
// 	let ready = (req.query.readyToEat === 'true')
//     let color = req.query.color
//     let filteredFruits = fruits.filter((item) => {
//         return item.name.includes(name) 
//         && item.readyToEat === ready 
//         && item.color === color
//     })
//     console.log(req.query.readyToEat)
// 	res.send(filteredFruits);
// });

// // example of a "show" route
// app.get("/fruits/:indexOfFruit", (req, res) => {
// 	let fruit = fruits[req.params.indexOfFruit];
// 	if (fruit) {
// 		res.send(fruit);
// 	} else {
// 		res.send("<h1>Not Found</h1>");
// 	}
// });


// app.get("/", (req, res) => {
// 	res.send("Hello World!");
// });

// app.listen(PORT, () => {
// 	console.log("Listening on port: " + PORT);
// });

/*

    Create a route for using queries (req.query) 
    to filter and send back specific data

    HINTS: use .filter, .includes

*/
