const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

//router from express
const router = express.Router();

//for register
router.post('/register', registerUser)

//for login
router.post('/login',loginUser)

//for current info
router.get('/current',validateToken, currentUser)

module.exports = router;