import express from "express";
import {
  getAllOrders,
  getOrder,
  getUserOrders,
  updateOrder,
  deleteOrder,
  createOrder,
} from "../controller/order.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getAllOrders);

router.get("/:id", getOrder);

router.get("/find/:userId", getUserOrders);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

router.post("/", createOrder);

export default router;
