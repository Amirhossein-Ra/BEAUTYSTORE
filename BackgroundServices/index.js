import express from "express";
import dotenv from "dotenv";
import dbConnection from "./util/db.js";
import cron from "node-cron";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./EmailServices/sendPendingOrder.js";
import sendDeliveredOrderEmail from "./EmailServices/sendDeliveredOrderEmail.js";
import sendPromotionEmail from "./EmailServices/sendPromotionEmail.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const services = () => {
  cron.schedule("* * * * *", () => {
    sendWelcomeEmail();
    sendPendingOrderEmail();
    sendDeliveredOrderEmail();
  });
};
const promotionService = () => {
  cron.schedule("30 5 * * 5", () => {
    sendPromotionEmail();
  });
};

services();
promotionService();

app.listen(PORT, () => {
  console.log(`SERVER is runnin in port ${PORT}`);
  dbConnection();
});
