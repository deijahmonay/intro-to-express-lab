const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log(req)
    res.send('<h1>Home Page</h1>')
})

// 1.Be Polite, Greet the User
app.get('/greetings', (req, res) => {
const name = req.query.name

res.send(`Hello there ${name}! I hope you're having a great day`)})

//! Hi Mark, can you give me feedback on number 1? Unsure if I did that right.

app.get('/roll/:itemNumber', (req, res) => {
    const itemNuber = req.params.itemNumber;

    if (isNAN(Number(itemNumber))){

    } else {
        res.send(`Item ${itemNumber}`)
    }
    // res.send(`<h1>Roll ${req.params.itemNumber}</h1>`)

});

app.get('something/:param', (req, res) => {
    // validate the param
    if ('conditional based param') 
        {
        // handle error
    }
    //respond to request
})



app.listen(3000, () => {
    console.log('Listening on port 3000')
})