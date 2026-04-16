import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/email-sending", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hossainshazid567@gmail.com",
        pass: "wjon egfy sows fofe",
      },
    });

    const mailOption = {
      from: "hossainshazid567@gmail.com",
      to: "mhossain223712@bscse.uiu.ac.bd",
      subject: "Test mail from myself to me",

      html: `<h1>the is test mail</h1>`,
    };

    await transporter.sendMail(mailOption);

    res.status(200).json({ message: "mail sent successfully", success: true });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log("server is listening at port 8000");
});
