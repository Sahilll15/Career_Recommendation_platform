const Router = require('express')
const router = Router()

const { verifyJWT } = require('../middlewares/verifyJwt')

const { createResume } = require('../controllers/resume.controllers')

router.post('/createResume', verifyJWT, createResume)

module.exports = router;

