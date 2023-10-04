const Router = require('express')
const router = Router();

const {createArticle,listAllArticles, insertManyArticles} = require('../controllers/article.controllers')

router.route('/').get(listAllArticles).post(createArticle)
router.route('/many').post(insertManyArticles)
module.exports = router;