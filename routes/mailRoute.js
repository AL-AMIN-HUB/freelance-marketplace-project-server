const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const mailSchema = require("../schemas/mailSchema");
const mailRoute = express.Router();
const Mail = new mongoose.model("Mail", mailSchema);
const cloudinary = require("../utils/cloudinry");
const upload = require("../utils/multer");

// CREATE A NEW NOTIFICATION
mailRoute.post("/", upload.single("image"), async (req, res) => {
  const { title, email, massege } = req.body;
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newUser = await Mail.create({
      title,
      image: result.secure_url,
      email,
      massege,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});

// GET ALL NOTIFICATIONS
mailRoute.get("/", async (req, res) => {
  try {
    const data = await Notify.find({});
    res.status(200).json({
      result: data,
      message: "Success!!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!!",
    });
  }
});

// GET MULTIPLE NOTIFICTIONS BY USER EMAIL
mailRoute.get("/:email", async (req, res) => {
  try {
    const data = await Notify.find({ email: req.params.email });
    res.status(200).json({
      result: data,
      message: "Success!!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!!",
    });
  }
});

module.exports = mailRoute;
