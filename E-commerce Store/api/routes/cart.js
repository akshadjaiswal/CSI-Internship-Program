import express from "express";
const router = express.Router();
import {
  addToCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCarts,
} from "../controllers/cart.js";
router.post("/", addToCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);
router.get("/find/:id", getCart);
router.get("/", getAllCarts);
export default router;
