import express from "express";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "../Controller/Todo.js";
const router = express.Router();

router.post("/create", addTodo);
router.get("/get", getAllTodo);
router.delete("/delete", deleteTodo);
router.put("/update", updateTodo);

export default router;  
