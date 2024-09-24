import express from 'express'
import { getotheruser, logout, register } from '../controllers/usercontoller.js';
import { login } from '../controllers/usercontoller.js';
import isAuthenticated from '../middleware/isAithenticaated.js';

const router = express.Router()

router.route("/register").post(register);
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/").get(isAuthenticated,getotheruser)


export default router


