import express from "express";
import uploadImage from "../controllers/uploads.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post('/uploads', upload.single("userPhoto"), uploadImage);

export default router;