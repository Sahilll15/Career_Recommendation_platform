const Resume = require('../models/resume.model')

// Create and Save a new Resume

const createResume = async (req, res) => {
    try {
        const resume = new Resume(req.body)
        await resume.save()
        res.status(201).json({
            success: true,
            data: resume
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    createResume
}