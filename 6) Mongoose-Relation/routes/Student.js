import express from "express";
import {createStudent, getAllStudent} from "../controllers/student.js";
const router = express.Router();

router.post("/create", createStudent);
router.get("/getAll", getAllStudent);

export default router;