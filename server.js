const express = require('express');
const app = express();

const PORT = 3000;
















app.listen(PORT, () => console.log(`Express is listening at port: ${PORT}`))
// const express = require('express')
// const app = express()

// app.get('/', (req,res) => {
//     console.log(req)
//     res.send('<h1>Home Page</h1>')
// })

// // 1.Be Polite, Greet the User
// app.get('/greetings', (req, res) => {
// const name = req.query.name

// res.send(`Hello there ${name}! I hope you're having a great day`)})

// //! Hi Mark, can you give me feedback on number 1? Unsure if I did that right.

// app.get('/roll/:itemNumber', (req,res) => {
//     const itemNumber = req.params.itemNumber

//     if (isNaN(itemNumber) || itemNumber <- 0) {
//         res.status(400).send(`You must specify a number.`)
//     } else {
//         res.send(`You rolled a ${itemNumber}`)
//     }
// })


//   app.get('/collectibles/:index', (req, res) => {
//     const index = parseInt(req.params.index, 10);
//     const item = collectibles[index];
//     const collectibles = [
//         { name: 'shiny ball', price: 5.95 },
//         { name: 'autographed picture of a dog', price: 10 },
//         { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//       ];

//     if(isNaN(index) || index < 0 || index >= collectibles.length) {
//         res.status(404).send(`This item is not yet in stock. Check back soon!`)
//     } else { res.semd(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)

//     }
//   })



// app.listen(3000, () => {
//     console.log('Listening on port 3000')
// })