const mongoose = require("mongoose");

// Define the Resume schema
const resumeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    linkedInUrl: {
        type: String,
    },
    about: {
        type: String,
    },
    education: {
        tenthMarks: {
            type: String,
        },
        twelfthMarks: {
            type: String,
        },
        currentAverageMarks: {
            type: String,
        },
    },
    skills: {
        type: [String],
    },
    workExperience: [
        {
            companyName: {
                type: String,
            },
            role: {
                type: String,
            },
            year: {
                type: String,
            },
        },
    ],
    projects: [
        {
            projectName: {
                type: String,
            },
            about: {
                type: String,
            },
            githubLink: {
                type: String,
            },
        },
    ],
    awards: [
        {
            position: {
                type: String,
            },
            competitionName: {
                type: String,
            },
            placeInstituteName: {
                type: String,
            },
        },
    ],
});



const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
