import {
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/product.js";
import express from "express";
const router = express.Router();

router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/find/:id", getProduct);
router.get("/", getAllProducts);

export default router;
