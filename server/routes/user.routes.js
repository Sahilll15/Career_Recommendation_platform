const Router = require('express')
const router = Router()

const { getLoggedinUser, login, resendVerificatoin, resetPassword, sendResetPasswordEmail, verifyemail, register } = require('../controllers/user.controllers')
const { verifyJWT } = require('../middlewares/verifyJwt')

router.post('/register', register)
router.post('/login', login)
router.get('/verifyemail/:tokenId', verifyemail)
router.post('/resendverification', resendVerificatoin)
router.post('/sendresetpasswordemail', sendResetPasswordEmail)
router.post('/resetpassword', resetPassword)
router.get('/getloggedinuser', verifyJWT, getLoggedinUser)


module.exports = router;
