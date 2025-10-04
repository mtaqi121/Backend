import express from "express";
import { createOrder, deleteOrder, getAllOrder } from "../controllers/Order.js";
const router = express.Router()

router.post("/create",createOrder);
router.delete("/delete",deleteOrder);
router.post("/getOrders",getAllOrder);

export default router;
