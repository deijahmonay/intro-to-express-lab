const express = require('express')
const app = express()

const PORT = 3000;

// 1. Be Polite, Greet the User
// Task: Create a route that responds to URLs like /greetings/<username-parameter>.

// Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

// Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”

app.get('/greetings', (req, res) => {
    const name = req.query.name
    
    res.send(`Hello there ${name}! I hope you're having a great day`)})
    
//! Hi Mark, can you give me feedback on number 1? Unsure if I did that right.


// 2. Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

// Examples: Matches routes like /roll/6 or /roll/20.

// Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

// Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”
    
app.get('/roll/:itemNumber', (req, res) => {
    const itemNumber = req.params.itemNumber

    if(isNaN(itemNumber) || itemNumber <- 0) {
        res.send(`You must specify a number`)
    } else {
    res.send(`You rolled at ${itemNumber}`)
}
})


// 3. I Want THAT One!
// Task: Create a route for URLs like /collectibles/<index-parameter>.

// Examples: Matches routes such as /collectibles/2 or /collectibles/0.


const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:indexNumber', (req, res) => {
    const index = parseInt(req.params.indexNumber)
    const collectible = collectibles[index]
    

    if (index >= 0 && index < collectibles.length) {
        res.send(`So you want the ${collectible.name}? For ${collectible.price}, it can be yours!`)
    } else {
        res.send('This item is not yet in stock. Check back soon!')
    }
})








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



