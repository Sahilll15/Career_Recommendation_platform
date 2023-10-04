const Router = require('express')
const router = Router()

const {addQuiz,getQuizByCatg,evaluateQuiz} = require('../controllers/quiz.controller')

router.route('/').post(addQuiz)
router.route('/:catg').get(getQuizByCatg)
router.route('/evaluate').patch(evaluateQuiz)

module.exports = router