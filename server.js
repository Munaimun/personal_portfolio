const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables from .env file

const app = express();

// Configure CORS to allow requests from your frontend origin
app.use(
  cors({
    origin: "http://localhost:3000", // Update to your frontend URL if different
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

app.listen(5000, () => console.log("Server Running on port 5000"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use an App Password if 2FA is enabled
  },
});

contactEmail.verify((error, success) => {
  if (error) {
    console.error("Nodemailer verification error:", error);
  } else {
    console.log("Nodemailer ready to send:", success);
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  console.log("Received request data:", req.body);

  const mail = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "fail", error: error.toString() });
    } else {
      console.log("Email sent successfully:", info.response);
      res.status(200).json({ status: "success", message: "Message Sent" });
    }
  });
});
