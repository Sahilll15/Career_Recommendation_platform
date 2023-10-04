const Router = require('express')
const router = Router()

const { login, resendVerificatoin, resetPassword, sendResetPasswordEmail, verifyemail, register } = require('../controllers/user.controllers')

router.post('/register', register)
router.post('/login', login)
router.get('/verifyemail/:tokenId', verifyemail)
router.post('/resendverification', resendVerificatoin)
router.post('/sendresetpasswordemail', sendResetPasswordEmail)
router.post('/resetpassword', resetPassword)


module.exports = router;
