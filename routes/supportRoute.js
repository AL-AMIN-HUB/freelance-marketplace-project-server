const express = require("express");
const mongoose = require("mongoose");
const supportSchema = require("../schemas/supportSchema");
const Support = new mongoose.model("Support", supportSchema);

const supportRoute = express.Router();
supportRoute.post("/", async (req, res) => {
  try {
    const newSupport = await Support.create(req.body);
    res.status(200).json(newSupport);
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});
// GET ALL Support
supportRoute.get("/", async (req, res) => {
  try {
    const data = await Support.find({});
    res.status(200).json({
      result: data,
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!!",
    });
  }
});
// GET Support by email
supportRoute.get("/email/:email", async (req, res) => {
  try {
    const data = await Support.find({ email: req.params.email });
    res.status(200).json({
      result: data,
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!!",
    });
  }
});
// Delete Support by id
supportRoute.delete("/:id", async (req, res) => {
  try {
    const data = await Support.deleteOne({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!!",
    });
  }
});
// GET Support by receiver
supportRoute.get("/receiver/:receiver", async (req, res) => {
  try {
    const data = await Support.find({ receiver: req.params.receiver });
    res.status(200).json({
      result: data,
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!!",
    });
  }
});
// GET Support by sender
supportRoute.get("/sender/:sender", async (req, res) => {
  try {
    const data = await Support.find({ sender: req.params.sender });
    res.status(200).json({
      result: data,
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!!",
    });
  }
});

module.exports = supportRoute;
