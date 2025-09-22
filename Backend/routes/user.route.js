import express from "express";
const router = express.Router();
import {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controller/user.controller.js";

router.get("/", getUsers);
router.get("/find/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
