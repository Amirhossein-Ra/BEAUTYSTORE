import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("api/v1/products", productRoute);

app.use(notFound);
app.use(errorHandler);

export default app;
