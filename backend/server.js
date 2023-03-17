// console.log('Hello world')
const express = require('express')
const dotenv = require('dotenv').config() 
const {errorHandler} = require('./middleware/errorMiddleware')

console.log(process.env.PORT)
const port = process.env.PORT || 5001

const app = express()

// API Requests are handles in routes folder in each file using express

// Some middlewares
app.use(express.json()) // Used to parse json
app.use(express.urlencoded({extended: false})) // We are sending data in this format in Postman





//We could have called all the requests here but it won't be a good design
// app.get('/api/menu', (req,res) => {
//     // res.send('Get Menu') // Normal Html data
//     res.status(200).json({"message" : 'Get Menu'}) // JSOn data // status will be 200 if successful, as we are setting the status ourselves
// })
//Instead 
// We use the following route to fetch the following file from the given location, 
app.use('/api/menu', require('./routes/menuRoutes'))


// middleware

app.use(errorHandler) // overwrites default



app.listen(port, () => console.log(`Server started on port ${port}`))