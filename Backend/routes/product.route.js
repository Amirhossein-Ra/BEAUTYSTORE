import {
  getProduct,
  getProducts,
  deleteProduct,
  createProduct,
  updatedProduct,
  ratingProduct,
} from "../controller/product.controller.js";

import express from "express";

const router = express.Router();

router.put("/rating/:productId", ratingProduct);

router.get("/", getProducts);

router.get("/find/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updatedProduct);

router.delete("/:id", deleteProduct);

export default router;
