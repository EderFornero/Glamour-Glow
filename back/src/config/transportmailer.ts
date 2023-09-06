import nodemailer from "nodemailer";
import "dotenv/config";
const {EMAIL_GLAMOUR_GLOW, PASSWORD_GLAMOUR_GLOW} = process.env

const myemail = EMAIL_GLAMOUR_GLOW;
const mypassword = PASSWORD_GLAMOUR_GLOW;

 export const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: myemail,
      pass: mypassword,
    },
  })