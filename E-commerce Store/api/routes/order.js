import express from "express";
const router = express.Router();
import {
  makeOrder,
  updateOrder,
  deleteOrder,
  getAllUsers,
  getUserOrders,
  monthlyIncome
} from "../controllers/order.js";
router.post("/", makeOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);
router.get("/find/:id", getUserOrders);
router.get("/", getAllUsers);
router.get('/income',monthlyIncome);
export default router;
