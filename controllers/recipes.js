const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe.js')








/////////ROUTES////////




////Create index
router.get('/', (req, res)=>{
    Recipe.find({}, (err, foundRecipes)=>{
        res.json(foundRecipes)
    })
})
router.post('/',(req, res)=>{
    Recipe.create(req.body, (err, createdRecipe)=>{
        res.json(createdRecipe)
    })
})
///Create delete route////
router.delete('/:id', (req, res)=>{
    Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe)=>{
        res.json(deletedRecipe)
    })
})


///Create Updated Route
router.put('/', (req, res)=>{
    Recipe.findByIdAndUpdate(req.params.id,(err, updatedRecipe)=>{
        res.json(updatedRecipe)
    })
})









router.get('/', (req, res) =>{
    res.send('index')
})

module.exports = router







