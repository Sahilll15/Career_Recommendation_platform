const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
    },

    about: {
        type: String,
        required: true,
    },
    education: [
        {
            institution: {
                type: String,
                required: true,
            },
            degree: {
                type: String,
                required: true,
            },
            graduationYear: {
                type: Number,
                required: true,
            },
        },
    ],
    experience: [
        {
            jobTitle: {
                type: String,
                required: true,
            },
            company: {
                type: String,
                required: true,
            },
            startDate: {
                type: Date,
                required: true,
            },
            endDate: {
                type: Date,
                required: true,
            },
            responsibilities: [String],
        },
    ],

    skills: [String],
    certifications: [
        {
            name: String,
            issuingOrganization: String,
            date: Date,
        },
    ],
});


const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
