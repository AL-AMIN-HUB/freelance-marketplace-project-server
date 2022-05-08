const express = require("express");
const multer = require("multer");
const authSchema = require("../schemas/authSchema");
const mongoose = require("mongoose");
const authRoute = express.Router();
const User = new mongoose.model("User", authSchema);
const cloudinary = require("../utils/cloudinry");
const upload = require("../utils/multer");
const { append } = require("express/lib/response");

// CREATE A NEW USER___
authRoute.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});
// GET ALL USERS__
authRoute.get("/", async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json({
      result: data,
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// GET A SINGLE BY --EMAIL-- USERS__
authRoute.get("/email/:email", async (req, res) => {
  try {
    const data = await User.findOne({ email: req.params.email });
    res.status(200).json({
      result: data,
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// GET A SINGLE USER BY --EMAIL ---------------------
authRoute.get("/status/:email", async (req, res) => {
  try {
    const data = await User.find({ email: req.params.email });
    res.status(200).json({
      status: data[0]?.status,
      message: "Success!!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!!",
    });
  }
});
authRoute.get("/:id", async (req, res) => {
  try {
    const data = await User.find({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: "Success!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// DELETE A SINGLE USER BY ID__
authRoute.delete("/:id", async (req, res) => {
  try {
    const data = await User.deleteOne({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: "User deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// UPDATE USER ABOUT___
authRoute.patch("/about/:id", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({
      result: data,
      message: "About updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// UPDATE USER SKILLS___
authRoute.patch("/skills/:id", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({
      result: data,
      message: "Skills updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// UPDATE USER EDUCATION__
authRoute.patch("/education/:id", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({
      result: data,
      message: "Education updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
authRoute.patch("/profession/:id", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({
      result: data,
      message: "Profession updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// UPDATE USER BIO__
authRoute.patch("/bio/:id", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({
      result: data,
      message: "Bio updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// UPDATE USER AVATAR__
authRoute.patch("/avatar/:id", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({
      result: data,
      message: "Education updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// UPDATE USER THUMBNAIL__
authRoute.patch("/banner/:id", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({
      result: data,
      message: "Banner updated successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});

// CREATE OR UPDATE SELLER LEVEL_____
//  SET LEVEL ONE___
authRoute.put("/level/one/:email", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate(
      { email: req.params.email },
      { $set: { level: "one" } }
    );
    res.status(200).json({
      result: data,
      message: "Seller level one add successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
//  SET LEVEL TWO___
authRoute.put("/level/two/:email", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate(
      { email: req.params.email },
      { $set: { level: "two" } }
    );
    res.status(200).json({
      result: data,
      message: "Seller level two add successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
//  SET LEVEL TOP___
authRoute.put("/level/top/:email", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate(
      { email: req.params.email },
      { $set: { level: "top" } }
    );
    res.status(200).json({
      result: data,
      message: "Seller level two add successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
//  CREATE ADMIN GET ADMIN AND DELETE ADMIN FROM HERE_____
//  Create a new admin___
authRoute.put("/admin/:email", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate(
      { email: req.params.email },
      { $set: { admin: "admin" } }
    );
    res.status(200).json({
      result: data,
      message: "Admin create successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
// Get and  access check
authRoute.get("/admin/:email", async (req, res) => {
  try {
    const data = await User.find({ email: req.params.email });
    if (data[0]?.admin === "admin") {
      res.status(200).json({
        isAdmin: data[0]?.admin,
        access: true,
        message: "Check admin get successfully!",
      });
    } else {
      res.status(200).json({
        isAdmin: data[0]?.admin,
        access: false,
        message: "Check admin get successfully!",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});
//  Remove a admin
authRoute.put("/remove/admin/:email", async (req, res) => {
  try {
    const data = await User.findOneAndUpdate(
      { email: req.params.email },
      { $set: { admin: "wasAdmin" } }
    );
    res.status(200).json({
      result: data,
      message: "Admin remove successfully!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});

module.exports = authRoute;
// Welcome to gsb soft
// authRoute.put("/banner/:id", upload.single("image"), async (req, res) => {
//   const result = await cloudinary.uploader.upload(req.file.path)
