import { register, login } from "../controllers/auth.js";
import express from "express";
const router = express.Router();
//register
router.post("/register", register);
router.post("/login", login);

export default router;
