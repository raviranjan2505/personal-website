import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "raviranjan2505@gmail.com",
      pass: "wptk kezh jyoq steg",
    },
  });

  export default transporter;