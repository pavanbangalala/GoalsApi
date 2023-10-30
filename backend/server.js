const express = require('express')
const { connectToDB } = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT|| 5000


connectToDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))

// app.get('/',(req, res)=>{
//     res.status(200).json({message:"getting goals"})
// })

app.use(errorHandler)
app.listen(PORT,(req, res)=>{
    console.log("app listening at post ",PORT)
})

