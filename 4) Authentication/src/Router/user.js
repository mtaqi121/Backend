import express from "express";
import { createUser, getAllUsers, loginUser } from "../Controller/user.js";
import auth from "../Middleware/auth.js";
const router = express.Router();

router.post("/singUp", createUser);
router.post("/singIn", loginUser);
router.get("/getusers", auth, getAllUsers);
export default router;
