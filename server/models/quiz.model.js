const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({

    category:{
        type:mongoose.Types.ObjectId,
        ref: "Category"
    },

    questions:[{
        ques:{
            type: String
        },
        options:[{
            type: String
        }],
        correctAns:{
            type:String
        }
    }],
    point:{
        type: Number
    }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz