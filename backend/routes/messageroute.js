import express from 'express';
import { getmessage, sendmessage } from '../controllers/messageController.js';
import isAuthenticated from '../middleware/isAithenticaated.js';

const router = express.Router();

router.route("/send/:id").post(isAuthenticated , sendmessage);
router.route("/:id").get(isAuthenticated , getmessage)


export default router
 
