const mongoose = require('mongoose')
require('dotenv').config();

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
    },
    intrestedCategory: [
        { type: mongoose.Types.ObjectId, ref: "Category" }

    ],


}, {
    timestamps: true
})


const User = mongoose.model("User", userSchema);
module.exports = User;

