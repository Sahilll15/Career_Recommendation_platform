const mongoose = require('mongoose')


const categorySchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "category name is required"],
        unique: [true, "categroy name must be unique"]
    },
    description: {
        type: String
    },
    relatedSkills: [{name:{type: String}}],
    imageUrl:{
        type:String
    },
    tags: [String]
},{timestamps: true});


const Category = mongoose.model('Category', categorySchema);
module.exports = Category