import nodemailer from "nodemailer";
import "dotenv/config"
const {EMAIL_GLAMOUR_GLOW, PASSWORD_GLAMOUR_GLOW} = process.env


const myemail = EMAIL_GLAMOUR_GLOW;
const mypassword = PASSWORD_GLAMOUR_GLOW;

 export const sendEmail = ({ recipient_email, subject, message }: any) => {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: myemail,
          pass: mypassword,
        },
      });
  
      const mail_configs = {
        from: myemail,
        to: recipient_email,
        subject: subject,
        text: message
       
      };
      transporter.sendMail(mail_configs, function (error, _info) {
        if (error) {
          console.log(error);
          return reject({ message: "An error has occured" });
        }
        return resolve({ message: "Email sent succesfuly" });
      });
    });
  }

 

  