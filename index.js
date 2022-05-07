const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const gigsRoute = require("./routes/gigsRoute");
const reviewRoute = require("./routes/reviewRoute");
const taskRoute = require("./routes/taskRoute");
const notifyRoute = require("./routes/notifyRoute");
const mailRoute = require("./routes/mailRoute");
const { append } = require("express/lib/response");
const port = process.env.PORT || 8000;

app.use(express.json());
dotenv.config();
app.use(cors({ origin: "*" }));
app.set("view engine", "ejs");
main().catch((err) => console.log(err));
async function main() {
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
    res.render("pages/home");
  });

  // All Routes Here__
  app.use("/auth/users", authRoute);
  app.use("/auth/gigs", gigsRoute);
  app.use("/auth/reviews", reviewRoute);
  app.use("/auth/task", taskRoute);
  app.use("/auth/notifictions", notifyRoute);
  app.use("/auth/mails", mailRoute);

  // Error Handle
  app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Headers : Origin, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");
    next();
  });
}

// function errorHandler(err, req, res, next) {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.status(500).json({ error: err })
// }

app.listen(port, (req, res) => {
  console.log(`Server is running in port no ${port}`);
});
// endgamesecuremarketplace
// fg1UOjQEJMpH6Bqv
// mongodb+srv://freelancemarketplace:wakibnSm5GKQDbKv@cluster0.wnq6s.mongodb.net/marketplaceFreelance?retryWrites=true&w=majority
// MONGO_URL=mongodb://localhost:27017/endgameproject
