const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const authRoute = require("./routes/authRoute");
const gigsRoute = require("./routes/gigsRoute");
const reviewRoute = require("./routes/reviewRoute");
const taskRoute = require("./routes/taskRoute");
const notifyRoute = require("./routes/notifyRoute");
const mailRoute = require("./routes/mailRoute");
const { corsOptions } = require("./config/cors");
const app = express();

// SETUP CONFIGURATION MIDDLEWARE
app.use(express.json());
dotenv.config();
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// Set Cors for cross origin resource sharing

app.use(cors(corsOptions));
// SETUP RESPONSE HEADERS MIDDLEWARE OR ACCESS CONTROL HEADERS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Acces-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE",
    "OPTIONS"
  );
  res.setHeader(
    "Acces-Contorl-Allow-Methods",
    "Content-Type",
    "application/json"
  );
  next();
});

// Database connection with mongoose___
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection successfully!"))
  .catch((err) => console.log(err));

// Main page or Home page__
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

// All Routes Here__
app.use("/auth/users", authRoute);
app.use("/auth/gigs", gigsRoute);
app.use("/auth/reviews", reviewRoute);
app.use("/auth/task", taskRoute);
app.use("/auth/notifictions", notifyRoute);
app.use("/auth/mails", mailRoute);

module.exports = app;
// endgamesecuremarketplace
// fg1UOjQEJMpH6Bqv
// mongodb+srv://freelancemarketplace:wakibnSm5GKQDbKv@cluster0.wnq6s.mongodb.net/marketplaceFreelance?retryWrites=true&w=majority
// MONGO_URL=mongodb://localhost:27017/endgameproject
