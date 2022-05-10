const express = require("express");
const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  buyerEmail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sellerEmail: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  buyerName: {
    type: String,
    require: true,
  },
  buyerImage: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = reviewSchema;
