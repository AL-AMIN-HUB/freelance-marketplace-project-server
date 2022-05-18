const mongoose = require("mongoose");
const express = require("express");
const JobCreator = require("../schemas/userSchema");

const userRoute = express.Router();
userRoute.get("/users", async (req, res) => {
  try {
    const users = await JobCreator.find({});
    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// POST A NEW USER
userRoute.post("/signup", async (req, res) => {
  const { name, email, password, phone, address, city, country } = req.body;
  if (!name || !email || !password || !phone || !country) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  // Using Promiss to create a new user
  try {
    const userExist = await JobCreator.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new JobCreator({
      name,
      email,
      password,
      phone,
      address,
      city,
      country,
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      res.status(201).json({ message: "User created successfully" });
    } else {
      res.status(500).json({ message: "Failed to registered" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

userRoute.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    console.log(email, password);
    const userLogging = await JobCreator.findOne({ email });

    if (userLogging) {
      res.status(200).json({ message: "User logged in successfully" });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = userRoute;
