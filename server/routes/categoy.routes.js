const Router = require('express')
const router = Router()

const {createCategory,listAllCategories, insertManyCategories} = require('../controllers/category.controllers');

router.get('/',listAllCategories);
router.post('/', createCategory);
router.post('/many', insertManyCategories)

module.exports = router;

