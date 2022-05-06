const express = require("express");
const mongoose = require("mongoose");
const notifySchema = require("../schemas/notifySchema");
const notifyRoute = express.Router();
const Notify = new mongoose.model("Notify", notifySchema);

// CREATE A NEW NOTIFICATION
notifyRoute.post("/", async (req, res) => {
  try {
    const newUser = await Notify.create(req.body);
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
