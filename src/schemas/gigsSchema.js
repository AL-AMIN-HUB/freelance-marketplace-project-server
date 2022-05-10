const express = require("express");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const gigsSchema = Schema({
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  first_day: {
    type: String,
  },
  first_desc: {
    type: String,
  },
  first_price: {
    type: String,
  },
  first_title: {
    type: String,
  },
  gallery: {
    type: [String],
  },
  gig_title: {
    type: String,
  },
  image1: {
    type: Schema.Types.Mixed,
  },
  image2: {
    type: Schema.Types.Mixed,
  },
  image3: {
    type: Schema.Types.Mixed,
  },
  image4: {
    type: Schema.Types.Mixed,
  },
  second_day: {
    type: String,
  },
  second_desc: {
    type: String,
  },
  second_price: {
    type: String,
  },
  second_title: {
    type: String,
  },
  third_day: {
    type: String,
  },
  third_desc: {
    type: String,
  },
  third_price: {
    type: String,
  },
  third_title: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  level: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// evrything is updata___
module.exports = gigsSchema;
