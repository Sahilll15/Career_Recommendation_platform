const User = require('../models/user.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();
const { sendVerificationEmail, generateverificationToken } = require('../utils/email')
const { successFullVerification } = require('../utils/EmailTemplates')
const OTP = require('../models/otp.models')
const { generateOTP, resetPasswordEmail } = require('../utils/email')


const getLoggedinUser = async (req, res) => {
    try {
        const user = req.user.id;
        const ExistingUser = await User.findById(user).select('-password');
        if (!ExistingUser) {
            return res.status(404).json({ message: "User not found" })
        } else {
            res.status(200).json({ user: ExistingUser, message: "success" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const existedUser = await User.findOne({
            $or: [{ username }, { email }],
        });
        if (existedUser) {
            return res.status(400).json({ message: "An account with this username or email  already exists" })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashPassword,
            // password
        })

        const verificationToken = generateverificationToken(email);
        newUser.verificationToken = verificationToken;
        await sendVerificationEmail(email, verificationToken);

        await newUser.save();
        res.status(201).json({ user: newUser, message: "Verification email has been sent" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



const login = (req, res) => {
    const { email, password } = req.body;
    try {
        User.findOne({ email }).then(user => {
            if (!user) {
                return res.status(400).json({ message: "User does not exist" })
            }
            if (!user.isVerified) {
                return res.status(400).json({ message: "Please verify your email" })
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch) {
                    return res.status(400).json({ message: "Invalid credentials" })
                }
                jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" }, (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.status(200).json({
                        token,
                        message: "Login successfull",
                        user: {
                            id: user._id,
                            username: user.username,
                            email: user.email,
                        }
                    })
                })


            })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



const verifyemail = async (req, res) => {
    try {
        const tokenId = req.params.tokenId;
        const user = await User.findOne({ verificationToken: tokenId });
        if (!user) {
            return res.status(404).json({ message: 'Invalid verification token.' });
        }

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        const congratulationContent = successFullVerification();

        res.send(congratulationContent);

    } catch (error) {
        res.status(500).json({ message: 'An error occurred during email verification.' });
        console.log(error);
    }
};

const resendVerificatoin = async (req, res) => {
    const { email } = req.body;
    try {

        if (!email) {
            return res.status(400).json({ message: "Email is required" })
        }

        const user = await User.findOne({
            email
        })

        console.log(user)

        if (!user) {
            return res.status(404).json({ message: "No user with this email" })
        }
        if (user.isVerified) {
            return res.status(400).json({ message: "This account is already verified" })
        }
        const verificationToken = generateverificationToken(email);
        user.verificationToken = verificationToken;
        await user.save();

        await sendVerificationEmail(email, verificationToken);
        res.status(200).json({ message: 'Verification email sent successfully.', verificationToken: verificationToken, user: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}


const sendResetPasswordEmail = async (req, res) => {

    try {
        let user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ message: 'Email does not exist' });
        } else {
            //logic to delete exisitng otp
            const otpexist = OTP.findOne({ email: req.body.email })
            if (otpexist) {
                await OTP.deleteMany({ email: req.body.email });
            }

            const expirationDate = new Date(Date.now() + 10 * 60 * 1000);
            const otpcode = generateOTP();
            const otpData = new OTP({
                code: otpcode,
                email: req.body.email,
                expiration: expirationDate,
            });

            await otpData.save();
            await resetPasswordEmail(req.body.email, otpcode);

            res.status(200).json({ message: 'OTP sent successfully', otp: otpData });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error' });
        console.log(error);
    }
};



const resetPassword = async (req, res) => {
    const { email, otpCode, password } = req.body;
    try {

        if (!email || !otpCode || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        console.log(email, otpCode, password);
        let data = await OTP.findOne({ email, code: otpCode });
        console.log(data);


        if (!data) {
            return res.status(404).json({ message: 'Invalid OTP' });
        } else {
            let currentTime = new Date();
            if (currentTime > data.expiration) {
                res.status(401).json({ message: "Token Expired" });
            } else {
                let user = await User.findOne({ email });


                if (!user) {
                    res.status(404).json({ message: "User does not exist" });
                } else {
                    const hashedPassword = await bcrypt.hash(password, 10);
                    user.password = hashedPassword;
                    await user.save();
                    res.status(200).json({ message: "Password changed successfully" });
                }
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'Error' });
        console.log(error);
    }
}




module.exports = {
    register,
    login,
    verifyemail,
    resendVerificatoin,
    sendResetPasswordEmail,
    resetPassword,
    getLoggedinUser

}

