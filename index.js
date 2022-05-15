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
const { append } = require("express/lib/response");
const supporRoute = require("./routes/supportRoute");
const jobRoute = require("./routes/jobsRoute");
const port = process.env.PORT || 5000;
const app = express();

// SETUP CONFIGURATION MIDDLEWARE
app.use(express.json());
dotenv.config();

// Set Cors for cross origin resource sharing
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
app.options(
  "*",
  cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 })
);
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
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
    useUnifiedTopology: true,
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
app.use("/auth/support", supporRoute);
app.use("/auth/jobs", jobRoute)


app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Headers : Origin, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Credentials", "true");
  next();
});

app.listen(port, (req, res) => {
  console.log(`Server is running in port no ${port}`);
});
// endgamesecuremarketplace
// fg1UOjQEJMpH6Bqv
// mongodb+srv://freelancemarketplace:wakibnSm5GKQDbKv@cluster0.wnq6s.mongodb.net/marketplaceFreelance?retryWrites=true&w=majority
// MONGO_URL=mongodb://localhost:27017/endgameproject
