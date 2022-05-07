const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const notifySchema = require("../schemas/notifySchema");
const notifyRoute = express.Router();
const Notify = new mongoose.model("Notify", notifySchema);
const cloudinary = require("../utils/cloudinry");
const upload = require("../utils/multer");
// const { append } = require("express/lib/response");
// CREATE A NEW NOTIFICATION
notifyRoute.post("/", upload.single("image"), async (req, res) => {
  const { title, massege } = req.body;
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newUser = await Notify.create({
      title,
      image: result.secure_url,
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
notifyRoute.get("/", async (req, res) => {
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
// GET MULTIPLE NOTIFICTIONS BU USER EMAIL
notifyRoute.get("/:email", async (req, res) => {
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

module.exports = notifyRoute;
