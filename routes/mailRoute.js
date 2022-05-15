const express = require("express");
const mongoose = require("mongoose");
const mailSchema = require("../schemas/mailSchema");
const mailRoute = express.Router();
const Mail = new mongoose.model("Mail", mailSchema);

// CREATE A NEW MAIL
mailRoute.post("/", async (req, res) => {
  try {
    const newUser = await Mail.create(req.body);
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
