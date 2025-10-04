import express from "express";
import createCourse from "../controllers/Course.js";
const router = express.Router();

router.post("/create", createCourse);

export default router;