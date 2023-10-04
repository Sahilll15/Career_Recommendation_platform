const mongoose = require('mongoose');

const userInteresetSchema = mongoose.Schema({

    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    interests:{
        type:mongoose.Types.ObjectId,
        ref: "Category"
    },

    strength: [String],
    personalityTraits: [String]
})


const UserInterests = mongoose.model('UserInterests', userInteresetSchema);

module.exports = UserInterests