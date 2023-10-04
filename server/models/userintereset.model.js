const mongoose = require('mongoose');

const userInteresetSchema = mongoose.Schema({

    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    interestCategory:[{              //For recommending Tech courses and Jobs
        type:mongoose.Types.ObjectId,
        ref: "Category"
    }],

    personalityTraits: [{
        name:{
            type: mongoose.Types.ObjectId,         //For recommending personality development courses
            ref: "Category"
        },
        score:{
            type: Number
        }
    }],

    interestShownViaTags:[String],  //For recommending via tags

    quizScore:[{
        quiz:{
            type: mongoose.Types.ObjectId,
            ref: "Quiz"
        },
        scored:{
            type:Number
        }
    }]
})


const UserInterests = mongoose.model('UserInterests', userInteresetSchema);

module.exports = UserInterests