import express from 'express';
import { createUser } from '../Controller/user.js';
const router = express.Router();

router.post ("/singUp", createUser);
export default router;