const express = require("express");
const mongoose = require("mongoose");
const gigsSchema = require("../schemas/gigsSchema");
const gigsRoute = express.Router();
const Gig = new mongoose.model("Gig", gigsSchema);

// CREATE A NEW Gig___
gigsRoute.post("/", async (req, res) => {
  try {
    const newUser = await Gig.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});
// GET ALL GIGS
gigsRoute.get("/", async (req, res) => {
  try {
    const data = await Gig.find({});
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
// GET TOP LEVEL GIGS
gigsRoute.get("/top", async (req, res) => {
  try {
    const data = await Gig.find({ level: "top" });
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
// GET A SINGLE GIG BY HELP OF GIG ID
gigsRoute.get("/:id", async (req, res) => {
  try {
    const data = await Gig.find({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: "Success!!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!",
    });
  }
});
// GET TOP LEVEL GIGS

// CREATE TOP LEVEL GIG---
gigsRoute.put("/top/:id", async (req, res) => {
  try {
    const data = await Gig.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { level: "top" } }
    );
    res.status(200).json({
      result: data,
      message: "Top level gig add successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// REMOVE FROM TOP LEVEL GIG
gigsRoute.put("/remove/top/:id", async (req, res) => {
  try {
    const data = await Gig.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { level: "wasTop" } }
    );
    res.status(200).json({
      result: data,
      message: "Top level gig removed successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
module.exports = gigsRoute;
