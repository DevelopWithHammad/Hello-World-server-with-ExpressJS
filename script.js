// const fs = require('fs')
// const http = require('http')
// const url = require('url')
// const port = 8000

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html'
//     })
//     if (req.url === '/') {
//         res.end("<h1>Welcome to my server</h1>")
//     } else if (req.url === '/signup') {
//         res.end("<h1>Welcome to signup page</h1>")
//     }
//     else if (req.url === '/login') {
//         res.end("<h1>Welcome to login page</h1>")
//     }
//     else if (req.url === '/dashboard') {
//         res.end("<h1>Welcome to dashboard</h1>")
//     }
   
// })

// server.listen(port, "127.0.0.1", () => {
//     console.log("Welcome to my server")
// })


import express from 'express'
// const express = require('express')
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