const Router = require('express')
const router = Router()


const {getRecmndArticles} = require('../controllers/recommendation.controllers')

router.route('/:id').get(getRecmndArticles)

module.exports = router;