import express from "express";
import { createUser, getAllUsers, loginUser } from "../controllers/user.js"
import authenticate from "../middlewares/auth.js";
const router = express.Router();

router.post("/singUp", createUser);
router.post("/singIn", loginUser);
router.get("/getusers", authenticate, getAllUsers);
export default router;