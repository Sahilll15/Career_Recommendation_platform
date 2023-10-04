const Router = require('express')
const router = Router()


const {addInterests} = require('../controllers/userinterest.controllers')


router.route('/').post(addInterests)

module.exports = router