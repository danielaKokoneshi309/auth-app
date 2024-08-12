const express = require('express');
const config= require('config');
const User = require('../models/user');  // Make sure this path is correct
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const router = express.Router();
const validateUser = require('../middleware/user');
const bcrypt= require('bcrypt')


// Login

router.post('/', async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

   
        const token = jwt.sign({_id:user._id},config.get('jwtPrivateKey'))
        
       
        res.send(token);
        
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('An error occurred while saving the user.');
    }
});

module.exports = router;
