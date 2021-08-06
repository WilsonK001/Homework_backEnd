const express = require('express')
const app = express()
const mongoose = require('mongoose')
const recipesController = require('./controllers/recipes.js')

const cors = require('cors')










//////MIDDLEWARE//////
app.use(express.json())
app.use(cors())
app.use('/recipes', recipesController)

app.use(express.urlencoded({ extended: true }))



//////ROUTES/////













mongoose.connect(
    'mongodb://localhost:27017/merncrud', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false 
    })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...')
})


app.listen(3000, ()=>{
    console.log('cooking...')
})