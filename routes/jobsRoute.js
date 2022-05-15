const jobSchema = require("../schemas/jobSchema");
const express = require("express");
const mongoose = require("mongoose");
const Job = new mongoose.model("Job", jobSchema);
const jobRoute = express.Router();
jobRoute.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json({
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST A NEW JOB
jobRoute.post("/jobs", async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(200).json({
      message: "Job created successfully",
      data: newJob,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = jobRoute;
