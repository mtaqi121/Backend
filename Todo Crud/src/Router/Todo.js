import express from "express";
import { addTodo, deleteTodo, getAllTodo } from "../Controller/Todo.js";
const router = express.Router();

router.post("/create", addTodo);
router.get("/get", getAllTodo);
router.delete("/delete/:id", deleteTodo);
export default router;  
