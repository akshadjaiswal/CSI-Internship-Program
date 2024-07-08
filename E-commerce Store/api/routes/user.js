import express from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";
import {
  getUser,
  getAllUsers,
  getUserStats,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
const router = express.Router();
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/stats", getUserStats);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;
