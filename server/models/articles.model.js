const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({

    relatedCategory:{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },

    articleName: {
        type: String,
        required: [true, "article name is required"]
    },

    description:{
        type: String
    },

    interestedUsers: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],

    relatedJobs:[{
        name:{
            type: String
        },
        avgSalary:{
            type: Number
        },
        company:{
            type: String
        },
        url:{
            type: String
        }
    }],

    relatedCourses: [{
        name:{
            type: String,
        },
        url:{
            type: String
        }
    }],

    trendInMarket:{
        type: String
    },

    tags:{
        type:[String]
    }

}, {timestamps: true});


const Article = mongoose.model('Article', articleSchema);
module.exports = Article