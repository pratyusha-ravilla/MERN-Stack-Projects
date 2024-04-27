import express from 'express';
import { register,login } from '../Controllers/authController.js';
import { appointment } from '../Controllers/authController.js';

const router = express.Router()

router.post('/register', register);
router.post('/login', login);
router.post('/appointment',appointment );


export default router;