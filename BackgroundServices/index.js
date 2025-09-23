import express from "express";
import dotenv from "dotenv";
import dbConnection from "./util/db.js";
import cron from "node-cron";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const services = () => {
  cron.schedule("* * * * *", () => {
    console.log("running a task every second");
  });
};

services();

app.listen(PORT, () => {
  console.log(`SERVER is runnin in port ${PORT}`);
  dbConnection();
});
