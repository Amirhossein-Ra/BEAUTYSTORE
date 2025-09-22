import express from "express";
const router = express.Router();

import {
  getAllBanners,
  getRandomBanner,
  createBanner,
  deleteBanner,
} from "../controller/banner.controller.js";

router.post("/", createBanner);

router.get("/", getAllBanners);

router.delete("/:id", deleteBanner);

router.get("/random", getRandomBanner);

export default router;
