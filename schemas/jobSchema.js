const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyDescription: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  jobTtile: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  qualifications: {
    type: [String],
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
  },
  responsibilities: {
    type: [String],
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
});

module.exports = jobSchema;
