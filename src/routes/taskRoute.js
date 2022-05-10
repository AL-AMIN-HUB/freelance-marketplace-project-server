const express = require("express");
const mongoose = require("mongoose");
const taskSchema = require("../schemas/taskSchema");

const Task = new mongoose.model("Task", taskSchema);
const taskRoute = express.Router();

// CREATE A NEW TASK FOR A SELECTED PERSON OR SELLER
taskRoute.post("/", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(200).json(newTask);
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});
// GET ALL TASK NOT USING ANY REQUIRE OR PARAMS
taskRoute.get("/", async (req, res) => {
  try {
    const data = await Task.find({});
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
// GET A ALL TASK USING ALL BUYER EMAIL
taskRoute.get("/buyerEmail/:buyerEmail", async (req, res) => {
  try {
    const data = await Task.find({ buyerEmail: req.params.buyerEmail });
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
// GET ALL TASK USING SELLER EMAIL DEPENDENCE FOR A SPECIFICS SELLER
taskRoute.get("/sellerEmail/:sellerEmail", async (req, res) => {
  try {
    const data = await Task.find({ sellerEmail: req.params.sellerEmail });
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
// DELETE A SINGLE TASK USING TASK ID
taskRoute.delete("/:id", async (req, res) => {
  try {
    const data = await Task.deleteOne({ _id: req.params.id });
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
// TASK UPDATE USING ACCEPT PARAMS
taskRoute.put("/accept/:id", async (req, res) => {
  try {
    const data = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { status: "accepted" } }
    );
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
// TASK UPDATE USING COMPLETE PARAMS
taskRoute.put("/complete/:id", async (req, res) => {
  try {
    const data = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { status: "completed" } }
    );
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

module.exports = taskRoute;
