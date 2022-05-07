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
app.set("view engine", "ejs");

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

  // blocking cors errors:
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ["GET", "POST"],
  allowedHeaders: ["*"],
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.listen(port, (req, res) => {
  console.log(`Server is running in port no ${port}`);
});
// endgamesecuremarketplace
// fg1UOjQEJMpH6Bqv
// mongodb+srv://freelancemarketplace:wakibnSm5GKQDbKv@cluster0.wnq6s.mongodb.net/marketplaceFreelance?retryWrites=true&w=majority
// MONGO_URL=mongodb://localhost:27017/endgameproject
