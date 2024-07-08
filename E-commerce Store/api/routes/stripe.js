import express from "express";
import { makePayment } from "../controllers/stripe.js";
const router = express.Router();
router.post("/pay", makePayment);
export default router;
