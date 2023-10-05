const mongoose = require('mongoose');
const User = require('./user.models');

const ProductSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        index: true
    },
    media: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
