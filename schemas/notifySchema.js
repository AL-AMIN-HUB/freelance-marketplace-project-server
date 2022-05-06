const express = require("express");
const mongoose = require("mongoose");

const notifySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  acceptor: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "unread",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = notifySchema;
