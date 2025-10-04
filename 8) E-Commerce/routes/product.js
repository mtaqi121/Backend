import express from "express";
import { createProduct, DeleteProduct, GetAllProduct, UpdateProduct } from "../controllers/product.js";
const router = express.Router();

router.post("/create",createProduct);
router.get("/get",GetAllProduct);
router.delete("/delete",DeleteProduct);
router.put("/update",UpdateProduct);

export default router;

