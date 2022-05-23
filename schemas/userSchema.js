const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// We are hashing the password before saving it to the database
// const bcrypt = require("bcrypt");
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});
const JobCreator = new mongoose.model("JobCreator", userSchema);
// Export user Schema
module.exports = JobCreator;
