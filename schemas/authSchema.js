const express = require("express");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const authSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  thumbnail: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  skills: {
    type: String,
  },
  education: {
    type: String,
  },
  profession: {
    type: String,
    max: 45,
  },
  bio: {
    type: String,
    max: 190,
  },
  status: {
    type: String,
    required: true,
    enum: ["buyer", "seller"],
  },
  image: {
    type: String,
  },
  admin: {
    type: String,
  },
  level: {
    type: String,
    enum: ["one", "two", "top"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = authSchema;
