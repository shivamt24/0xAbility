// console.log('Hello world')
const express = require('express')
const dotenv = require('dotenv').config() 
console.log(process.env.PORT)
const port = process.env.PORT || 5001

const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))