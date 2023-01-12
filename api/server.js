const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Newsfeedly").then(()=>console.log("DB connectes")).catch(err => console.log("Mongoose err = ",err))

const internetApi = require('./routes/internetApi')

app.use('/',internetApi)


app.listen(5000)