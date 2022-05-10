const express = require("express");
const mongoose = require("mongoose");
const reviewSchema = require("../schemas/reviewSchema");

const Review = new mongoose.model("Review", reviewSchema);

const reviewRoute = express.Router();

reviewRoute.post("/", async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(200).json(newReview);
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});
// GET ALL Review
reviewRoute.get("/", async (req, res) => {
  try {
    const data = await Review.find({});
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
// GET Review by buyer email
reviewRoute.get("/buyerEmail/:buyerEmail", async (req, res) => {
  try {
    const data = await Review.find({ buyerEmail: req.params.buyerEmail });
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
// Get review by seller email
// GET A SINGLE BY --EMAIL-- USERS__
reviewRoute.get("/sellerEmail/:sellerEmail", async (req, res) => {
  try {
    const data = await Review.find({ sellerEmail: req.params.sellerEmail });
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

module.exports = reviewRoute;
