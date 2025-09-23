import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function createTransporter(config) {
  const trasporter = nodemailer.createTransport(config);
  return trasporter;
}

let configurations = {
  service: "gmail",
  host: "smt.gmail.com",
  port: 587,
  requireTls: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const sendMail = async (messageOption) => {
  const transporter = await createTransporter(configurations);
  await transporter.verify();

  await transporter.sendMail(messageOption, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(info.response);
  });
};

export default sendMail;
