

import express from 'express'
const app = express()
const PORT = process.env.PORT || 8070

app.get('/', (req, res) => {
    
    res.send("Welcome to my server!")
})

app.get('/profile', (req, res) => {
    res.send("Welcome to profiles!")
})
app.get('/signup', (req, res) => {
    res.send("Welcome to register page!")
})

app.listen(PORT, () => {
    console.log("I am listening tp the server!")
})