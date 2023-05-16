const {Router} = require('express');

const router = Router();
const User = require('../modals/User');
const {check, validationResult} = require('express-validator')
const bcrypt = require ('bcryptjs')
const jwtToken = require ('jsonwebtoken')

router.post('/registration', 
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Uncorrect passowrd').isLength({min: 6})
    ]
,

async (req, res) => {
    try {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Unccorect data'
            })
        }

        const {email, password} = req.body;

        const isUsed = await User.findOne({email})

        if(isUsed)  {
            return res.status(300).json({message: 'You have already registered'})
        }

        // тут не работает

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: 'Your account has been registered'})

    } catch (error) {
        console.log(error);
    }
})


router.post('/login', 
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Uncorrect passowrd').exists()
    ]
,

async (req, res) => {
    try {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Unccorect data'
            })
        }

        const {email, password} = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                message: 'Not this email in base'
            })
        }

        const isMatched = bcrypt.compare(password, user.password);

        if(!isMatched) {
            return res.status(400).json({
                message: 'Пароли не совпадают'
            })
        } 

        const jwtSecret = '123pasdpapd123'

        const token = jwtToken.sign(
            {userId: user.id},
            jwtSecret,
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})
        
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;