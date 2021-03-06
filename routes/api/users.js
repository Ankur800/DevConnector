const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// Getting user Schema
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // SEE IF USER ALREADY EXISTS ?
            let user = await User.findOne({ email: email });
            if (user) {
                return res.status(400).json({
                    errors: [{ msg: 'User already exists!' }],
                });
            }

            // GET USER'S GRAVATAR
            // returns image url
            const avatar = gravatar.url(email, {
                s: '200', //size
                r: 'pg', //rating
                d: 'mm', // gives default user image if doesn't exists one
            });

            user = new User({
                name, // same as name: name => because we have put same name as 'name'
                email,
                avatar,
                password,
            });

            // ENCRYPT PASSWORD
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // Save user to database
            await user.save();

            // RETURN JSONWEBTOKEN(JWT)
            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
