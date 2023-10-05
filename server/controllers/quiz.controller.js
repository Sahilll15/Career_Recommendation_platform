const Quiz = require('../models/quiz.model');
const Category = require('../models/category.model');
const User = require('../models/user.models');
const UserInterests = require('../models/userintereset.model');


const addQuiz = async (req,res) => {

   try{
    const {category, questions, point} = req.body;

    if(!category || !questions || !point){
        res.status(400).json({message: "All fields are mandatory"})
    }

    const existingCatg = await Category.findById(category);
    if(!existingCatg){
        res.status(404).json({message: "Category does not exists"});
    }

    const newQuiz = await Quiz.create({
        category,
        questions,
        point
    })

    res.status(201).json(newQuiz)
   }catch(error){
        console.error(error);
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
   }
}
const getQuizByCatg = async (req, res) => {
    try {
        const catg = req.params.catg;
        const existingCatg = await Category.findById(catg);
        if (!existingCatg) {
            return res.status(404).json({ message: "Category does not exist" });
        }
        const quizzes = await Quiz.find({ category: catg });
        if (!quizzes || quizzes.length === 0) {
            return res.status(404).json({ message: "No quizzes found for the selected category" });
        }

        const quizData = quizzes.map((quiz) => ({
            questions: quiz.questions.map((question) => ({
                questionText: question.ques,
                options: question.options,
                correctAnswer: question.correctAns,
            })),

            quizId: quiz._id,
            quizPoints: quiz.point
        }));

        res.status(200).json(quizData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
};


const evaluateQuiz = async (req,res) => {

    try{
        const {quizId,userId, marksScored} = req.body;
        const existingQuiz = await Quiz.findById(quizId);
        if(!existingQuiz){
            res.status(404).json({message: "Quiz does not exists"})
        }
        const existingUser = await UserInterests.findOne({user: userId});
        if(!existingUser){
            res.status(404).json({message: "User does not exists"})
        }
            existingUser.quizScore.push({
                quiz: quizId,
                scored: marksScored,
            });
            await existingUser.save();
            res.status(200).json({message: "Quiz successfully assessed"})
        

    }catch(error){
        console.error(error);
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }

}


module.exports = { getQuizByCatg, evaluateQuiz, addQuiz };





