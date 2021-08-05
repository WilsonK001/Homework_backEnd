const mongoose = require('mongoose')
const recipesSchema = new mongoose.Schema(
    {
        name: String,
        category: String,
        image: String,
    }
)




const Recipe = mongoose.model('Recipe', recipesSchema)

module.exports = Recipe